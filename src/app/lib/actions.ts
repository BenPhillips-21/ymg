"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function insertion(formData: FormData) {
  try {
    console.log(formData);
    const nameRequest = formData.get('nameRequest') as string;
    const emailRequest = formData.get('emailRequest') as string;
    const numberRequest = formData.get('numberRequest') as string;
    const locationRequest = formData.get('locationRequest') as string;
    const ageRequest = formData.get('ageRequest') as string;

    const trimmedName = nameRequest.trim();
    const trimmedEmail = emailRequest.trim();
    const trimmedNumber = numberRequest.trim();
    const trimmedLocation = locationRequest.trim();
    const trimmedAge = ageRequest.trim();
  
      if (!trimmedName || trimmedName.length < 2) {
        return NextResponse.json({ error: 'Name is required and must be at least 2 characters long.' }, { status: 400 });
      }
      if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
        return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 });
      }
      if (!trimmedNumber || !/^\d{10}$/.test(trimmedNumber)) {
        return NextResponse.json({ error: 'Phone number is required and must be exactly 10 digits.' }, { status: 400 });
      }
      if (!trimmedLocation || trimmedLocation.length < 2) {
        return NextResponse.json({ error: 'Location is required and must be at least 2 characters long.' }, { status: 400 });
      }
      const parsedAge = parseInt(trimmedAge, 10);
      if (isNaN(parsedAge) || parsedAge < 0 || parsedAge > 99) {
          return NextResponse.json({ error: 'Age is required and must be a valid number between 0 and 99.' }, { status: 400 });
      }
  
    const users = await getAllUsers();
    const lastUser = users[users.length - 1];
    const newUserId = lastUser ? lastUser.id + 1 : 1;
  
    await db
      .insert(usersTable)
      .values({
        id: newUserId,
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedNumber,
        location: trimmedLocation,
        age: trimmedAge,
      });
  } catch (error) {
    console.error("Error during user insertion:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function getAllUsers() {
  const users = await db.query.usersTable.findMany();
  return users;
}
