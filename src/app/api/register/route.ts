import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, Registration } from "@/lib/supabase";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "full_name",
      "date_of_birth",
      "mobile_number",
      "email",
      "city_suburb",
      "state",
      "country",
      "dietary_requirements",
      "medical_conditions",
      "emergency_contact_name",
      "emergency_contact_relationship",
      "emergency_contact_phone",
      "confirms_18_or_older",
      "agrees_to_code_of_conduct",
      "photo_consent",
      "registration_type",
      "amount_paid",
    ];

    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null || body[field] === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate consent checkboxes
    if (!body.confirms_18_or_older || !body.agrees_to_code_of_conduct) {
      return NextResponse.json(
        { error: "You must confirm age and agree to code of conduct" },
        { status: 400 }
      );
    }

    // Check if email already registered
    const { data: existingRegistration } = await supabaseAdmin
      .from("registrations")
      .select("id")
      .eq("email", body.email)
      .single();

    if (existingRegistration) {
      return NextResponse.json(
        { error: "This email is already registered for the event" },
        { status: 400 }
      );
    }

    // Determine price based on date
    const now = new Date();
    const earlyBirdDeadline = new Date("2026-04-30T23:59:59");
    const expectedPrice = now <= earlyBirdDeadline ? 250 : 300;

    if (body.amount_paid !== expectedPrice) {
      return NextResponse.json(
        { error: "Invalid registration price" },
        { status: 400 }
      );
    }

    // Prepare registration data
    const registrationData: Omit<Registration, "id" | "created_at"> = {
      full_name: body.full_name,
      date_of_birth: body.date_of_birth,
      mobile_number: body.mobile_number,
      email: body.email,
      city_suburb: body.city_suburb,
      state: body.state,
      country: body.country,
      dietary_requirements: body.dietary_requirements,
      dietary_other: body.dietary_other || null,
      medical_conditions: body.medical_conditions,
      medical_details: body.medical_details || null,
      emergency_contact_name: body.emergency_contact_name,
      emergency_contact_relationship: body.emergency_contact_relationship,
      emergency_contact_phone: body.emergency_contact_phone,
      is_catholic: body.is_catholic || null,
      parish: body.parish || null,
      first_ymg_event: body.first_ymg_event || null,
      how_heard: body.how_heard || null,
      how_heard_other: body.how_heard_other || null,
      confirms_18_or_older: body.confirms_18_or_older,
      agrees_to_code_of_conduct: body.agrees_to_code_of_conduct,
      photo_consent: body.photo_consent === "yes",
      marketing_consent: body.marketing_consent || false,
      registration_type: body.registration_type,
      amount_paid: body.amount_paid,
      paid: false,
    };

    // Insert registration into Supabase
    const { data: registration, error: insertError } = await supabaseAdmin
      .from("registrations")
      .insert(registrationData)
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to create registration" },
        { status: 500 }
      );
    }

    // Create Stripe Checkout Session
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: `YMG Power Retreat 2026 - ${body.registration_type === "early_bird" ? "Early Bird" : "Standard"} Registration`,
              description: `Registration for ${body.full_name}`,
            },
            unit_amount: body.amount_paid * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/power-retreat-sign-up/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/power-retreat-sign-up/cancelled`,
      customer_email: body.email,
      metadata: {
        registration_id: registration.id,
        email: body.email,
      },
    });

    // Update registration with Stripe session ID
    await supabaseAdmin
      .from("registrations")
      .update({ stripe_session_id: session.id })
      .eq("id", registration.id);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
