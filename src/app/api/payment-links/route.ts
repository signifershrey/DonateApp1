import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import PaymentLinks, { IPaymentLinks } from "@/app/models/PaymentLinks";

// Connect to MongoDB
connect().catch((error) => console.error("Database connection error:", error));

// GET request handler to retrieve payment links without _id and __v fields
export async function GET() {
  try {
    const paymentLinks: IPaymentLinks | null = await PaymentLinks.findOne(
      {},
      "-_id -__v"
    );
    return NextResponse.json(
      paymentLinks || {
        paypal: "",
        gofundme: "",
        venmo: "",
        sosusa: "",
        inash: "",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching payment links:", error);
    return NextResponse.json(
      { error: "Failed to fetch payment links" },
      { status: 500 }
    );
  }
}

// PUT request handler to update payment links
export async function PUT(req: Request) {
  try {
    const { paypal, gofundme, venmo, sosusa, inash } =
      (await req.json()) as IPaymentLinks;
    await PaymentLinks.updateOne(
      {},
      { paypal, gofundme, venmo, sosusa, inash },
      { upsert: true }
    );
    return NextResponse.json(
      { message: "Payment links updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating payment links:", error);
    return NextResponse.json(
      { error: "Failed to update payment links" },
      { status: 500 }
    );
  }
}
