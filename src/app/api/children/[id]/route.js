import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Child from "@/app/models/Child";
import { connect } from "@/dbConfig/dbConfig";



// GET request to fetch a single child by ID
export async function GET(req, { params }) {
  try {
    await connect();

    // Extract and validate ID
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    // Fetch child from database
    const child = await Child.findById(id);
    if (!child) {
      return NextResponse.json({ error: "Child not found" }, { status: 404 });
    }

    return NextResponse.json(child, { status: 200 });
  } catch (error) {
    console.error("Error fetching child:", error);
    return NextResponse.json(
      { error: "Failed to fetch child" },
      { status: 500 }
    );
  }
}
