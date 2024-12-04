// app/api/mock-payment-links/route.js

import { NextResponse } from "next/server";

export async function GET() {
  // Simulate a GET response with predefined payment links
  return NextResponse.json({
    paypal: "https://paypal.com/newlink",
    gofundme: "https://gofundme.com/newlink",
    venmo: "https://venmo.com/newlink",
    sosusa: "https://sosusa.com/newlink",
    inash: "https://inash.com/newlink",
  });
}

export async function PUT(request) {
  try {
    const body = await request.json();

    // Validate the input
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Log the updated data (you could also simulate saving it to a database here)
    console.log("Updated Payment Links:", body);

    // Simulate a successful update response
    return NextResponse.json(body);
  } catch (error) {
    console.error("Error updating payment links:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
