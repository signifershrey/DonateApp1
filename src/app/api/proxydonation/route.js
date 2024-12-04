// src/app/api/proxydonation/route.js

import { NextResponse } from "next/server";

const apiUrl = "https://www.docswithinborders.org/api/donations";

// Handler for all HTTP methods (GET, POST, PUT, DELETE)
async function proxyDonationRequest(req) {
  try {
    // Forward the request to the external API with the same method, headers, and body (if applicable)
    const response = await fetch(apiUrl, {
      method: req.method, // Use the same method as the incoming request
      headers: {
        "Content-Type": "application/json",
        ...(req.headers.get("authorization") && {
          Authorization: req.headers.get("authorization"), // Forward Authorization header if present
        }),
      },
      body: req.method !== "GET" ? JSON.stringify(await req.json()) : undefined, // Include body for non-GET requests
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Donations ", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching donations:", error.message);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Named exports for each method
export async function GET(req) {
  return proxyDonationRequest(req);
}

export async function POST(req) {
  return proxyDonationRequest(req);
}

export async function PUT(req) {
  return proxyDonationRequest(req);
}

export async function DELETE(req) {
  return proxyDonationRequest(req);
}
