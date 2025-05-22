"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { FormState } from "./types";

export async function insertion(prevState: FormState, formData: FormData) {
  try {
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
        return { message: 'Name is required and must be at least 2 characters long.' };
      }
      if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
        return { message: 'Invalid email format.' };
      }
      if (!trimmedNumber || !/^\d{10}$/.test(trimmedNumber)) {
        return { message: 'Phone number must be exactly 10 digits.' };
      }
      if (!trimmedLocation || trimmedLocation.length < 2) {
        return { message: 'Location is required and must be at least 2 characters long.' };
      }
      const parsedAge = parseInt(trimmedAge, 10);
      if (isNaN(parsedAge) || parsedAge < 0 || parsedAge > 99) {
          return { message: 'Age must be a number between 0 and 120.' };
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

    return { message: 'Success! A confirmation email will be sent to the email address provided within 24 hours.' };
  } catch (error) {
    console.log(error);
    return { message: 'Internal server error.' };
  }
}

export async function getAllUsers() {
  const users = await db.query.usersTable.findMany();
  return users;
}
