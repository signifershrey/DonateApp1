// import { NextResponse } from "next/server";
// import { connect } from "@/dbConfig/dbConfig";
// import PaymentLinks, { IPaymentLinks } from "@/app/models/PaymentLinks";

// // Connect to MongoDB
// connect().catch((error) => console.error("Database connection error:", error));

// // GET request handler to retrieve payment links without _id and __v fields
// export async function GET() {
//   try {
//     const paymentLinks: IPaymentLinks | null = await PaymentLinks.findOne(
//       {},
//       "-_id -__v"
//     );
//     return NextResponse.json(
//       paymentLinks || {
//         paypal: "",
//         gofundme: "",
//         venmo: "",
//         sosusa: "",
//         inash: "",
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching payment links:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch payment links" },
//       { status: 500 }
//     );
//   }
// }

// // PUT request handler to update payment links
// export async function PUT(req: Request) {
//   try {
//     const { paypal, gofundme, venmo, sosusa, inash } =
//       (await req.json()) as IPaymentLinks;
//     await PaymentLinks.updateOne(
//       {},
//       { paypal, gofundme, venmo, sosusa, inash },
//       { upsert: true }
//     );
//     return NextResponse.json(
//       { message: "Payment links updated successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating payment links:", error);
//     return NextResponse.json(
//       { error: "Failed to update payment links" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://www.docswithinborders.org/api/payment-links",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching payment links:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";

// // Handle GET requests
// export async function GET() {
//   try {
//     const response = await fetch(
//       "https://www.docswithinborders.org/api/payment-links",
//       {
//         headers: { "Content-Type": "application/json" },
//         redirect: "follow",  // Follow redirects if any
//       }
//     );

//     if (!response.ok) {
//       return NextResponse.json(
//         { error: `Failed to fetch: ${response.statusText}` },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     console.log("Links ", data);
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error fetching payment links:", error);
//     return NextResponse.json(
//       { error: "An unexpected error occurred" },
//       { status: 500 }
//     );
//   }
// }

// export async function PATCH(request) {
//   try {
//     const body = await request.json();

//     // Validate the input
//     if (!body || typeof body !== "object") {
//       return NextResponse.json(
//         { error: "Invalid request body" },
//         { status: 400 }
//       );
//     }

//     // Forward the PATCH request to the external API
//     const response = await fetch(
//       "https://www.docswithinborders.org/api/payment-links",
//       {
//         method: "PATCH",  // Change from PUT to PATCH
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//         redirect: "follow",  // Follow redirects if any
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       return NextResponse.json(
//         { error: `Failed to update: ${errorText}` },
//         { status: response.status }
//       );
//     }

//     const updatedData = await response.json();
//     console.log("Updated Links: ", updatedData);
//     return NextResponse.json(updatedData);
//   } catch (error) {
//     console.error("Error updating payment links:", error);
//     return NextResponse.json(
//       { error: "An unexpected error occurred" },
//       { status: 500 }
//     );
//   }
// }
