import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    //Extract data from token
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
