import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: registrations, error } = await supabaseAdmin
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch registrations" },
        { status: 500 }
      );
    }

    return NextResponse.json({ registrations });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
