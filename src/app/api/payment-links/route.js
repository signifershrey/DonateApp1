import { connectToDatabase } from "../../../lib/mongoDb";
import PaymentLinks from "../../models/PaymentLinks";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to the database
    const { db } = await connectToDatabase();

    // Fetch the first document in the `payment_links` collection
    const paymentLinks = await db.collection("payment_links").findOne({});

    if (!paymentLinks) {
      return NextResponse.json(
        { error: "No payment links found" },
        { status: 404 }
      );
    }

    // Return the payment links as JSON
    return NextResponse.json(paymentLinks, { status: 200 });
  } catch (error) {
    console.error("Error fetching payment links:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}


export async function PATCH(request) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("payment_links");

    const body = await request.json();

    // Validate input
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body. Must be a JSON object." },
        { status: 400 }
      );
    }

    // Ensure at least one document exists
    const existingDocument = await collection.findOne({});
    if (!existingDocument) {
      await collection.insertOne({
        gofundme: "",
        inash: "",
        paypal: "",
        sosusa: "",
        venmo: "",
      });
    }

    // Prepare fields for update
    const updateFields = {};
    for (const key in body) {
      if (body[key] !== undefined) {
        updateFields[key] = body[key];
      }
    }

    if (Object.keys(updateFields).length === 0) {
      return NextResponse.json(
        { error: "No valid fields provided for update." },
        { status: 400 }
      );
    }

    // Update the first document
    const result = await collection.updateOne(
      { _id: existingDocument._id }, // Match by unique `_id`
      { $set: updateFields }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: "No documents were updated." },
        { status: 404 }
      );
    }

    // Return success
    return NextResponse.json({
      message: "Payment links updated successfully.",
    });
  } catch (error) {
    console.error("Error updating payment links:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}