// import { connectToDatabase } from "../../../lib/mongoDb";
import {connect} from '../../../dbConfig/dbConfig'
import Form from "../../models/Form";

export async function GET(req) {
  try {
    // Connect to the database
    await connect();
    console.log("Database connected successfully");

    // Fetch all form details from the database
    const forms = await Form.find({});

    // Return the forms as JSON
    return new Response(JSON.stringify({ success: true, forms }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching forms:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
