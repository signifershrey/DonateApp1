import { connect } from "@/dbConfig/dbConfig";
import Campaign from "@/app/models/campaignModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { campaignName, amountCollected, amountSpent } = await request.json();
  await connect();
  await Campaign.create({ campaignName, amountCollected, amountSpent });
  return NextResponse.json({ message: "Campaign Created" }, { status: 201 });
}

export async function GET() {
  await connect();
  const allCampaigns = await Campaign.find();
  return NextResponse.json({ allCampaigns });
}


//DELETE
export  async function DELETE(request) {

    if (request.method !== "DELETE") {
        return NextResponse.json(
            { message: "Method Not Allowed" },
            { status: 405 }
        );
    }
    console.log("REQQ DEL");

  // const searchParams = request.nextUrl.searchParams;

   const { _id} = await request.json();

// get the values of the name and age parameters
  // const id = searchParams.get("_id");
  console.log('DE:', _id);
  await connect();
    
  if (!_id) {
    return NextResponse.json(
      { message: "ID parameter is missing" },
      { status: 400 }
    );
  }

  const deletedCampaign = await Campaign.findByIdAndDelete(_id);

  if (!deletedCampaign) {
    return NextResponse.json({ message: "Campaign not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Campaign deleted", deletedCampaign },
    { status: 200 }
  );
}

// EDIT
export async function PUT(request) {
  if (request.method !== "PUT") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const { _id, amountCollected, amountSpent } = await request.json();
  await connect();
  const updatedCampaign = await Campaign.findByIdAndUpdate(
    {_id},
    { amountCollected, amountSpent },
    { new: true }
  );

  if (!updatedCampaign) {
    return NextResponse.json({ message: "Campaign not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Campaign updated", updatedCampaign });
}

