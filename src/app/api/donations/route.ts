// src/app/api/donations/route.ts
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Donations from "@/app/models/Donations";

interface DonationData {
  totalDonations: number;
  paypalDonations: number;
  zelleDonations: number;
  venmoDonations: number;
}

// Connect to MongoDB before handling requests
connect().catch((error) => console.error("Database connection error:", error));

// GET request handler
export async function GET() {
  try {
    const donations = await Donations.findOne<DonationData>({});
    return NextResponse.json(
      donations || {
        totalDonations: 0,
        paypalDonations: 0,
        zelleDonations: 0,
        venmoDonations: 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching donations:", error);
    return NextResponse.json(
      { error: "Failed to fetch donations" },
      { status: 500 }
    );
  }
}

// POST request handler
export async function POST(req: Request) {
  try {
    const {
      totalDonations,
      paypalDonations,
      zelleDonations,
      venmoDonations,
    }: DonationData = await req.json();
    const donations = new Donations({
      totalDonations,
      paypalDonations,
      zelleDonations,
      venmoDonations,
    });
    await donations.save();
    return NextResponse.json(
      { message: "Donations saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving donations:", error);
    return NextResponse.json(
      { error: "Failed to save donations" },
      { status: 500 }
    );
  }
}

// PUT request handler
export async function PUT(req: Request) {
  try {
    const {
      totalDonations,
      paypalDonations,
      zelleDonations,
      venmoDonations,
    }: DonationData = await req.json();
    await Donations.updateOne(
      {},
      { totalDonations, paypalDonations, zelleDonations, venmoDonations },
      { upsert: true }
    );
    return NextResponse.json(
      { message: "Donations updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating donations:", error);
    return NextResponse.json(
      { error: "Failed to update donations" },
      { status: 500 }
    );
  }
}
