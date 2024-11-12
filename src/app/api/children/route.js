import { NextResponse } from "next/server";
import formidable from "formidable";
import { connect, gfs } from "@/dbConfig/dbConfig"; // Import the connect function and gfs instance
import fs from "fs";
import path from "path";
import Child from "@/app/models/Child";

// Disable Next.js body parser for this API route
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to parse form data
async function parseForm(req) {
  const form = formidable({
    keepExtensions: true,
    uploadDir: path.join(process.cwd(), "public/uploads"), // Directory to temporarily store the file
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
}

// Helper function to save the image to MongoDB via GridFS
async function saveImageToMongo(files) {
  const file = files.image[0]; // Assuming only one file is uploaded
  const readStream = fs.createReadStream(file.filepath); // Read the uploaded file from disk
  const uploadStream = gfs.openUploadStream(file.originalFilename); // Create a GridFS upload stream

  // Pipe the file into GridFS
  readStream.pipe(uploadStream);

  return new Promise((resolve, reject) => {
    uploadStream.on("finish", () => {
      resolve(uploadStream.id); // Return the ObjectId of the uploaded file
    });

    uploadStream.on("error", (err) => {
      reject(err); // Reject the promise if any error occurs
    });
  });
}

export async function POST(req) {
  try {
    await connect(); // Ensure the database is connected

    // Parse the form data
    const { fields, files } = await parseForm(req);
    const { name, bio, ebookLink } = fields;

    // Validate the required fields
    if (!name || !bio || !ebookLink || !files.image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save the image to MongoDB and get its ObjectId
    const imageId = await saveImageToMongo(files);

    // Create a new child object and save it to MongoDB
    const newChild = new Child({
      name,
      bio,
      ebookLink,
      image: imageId, // Store the ObjectId of the uploaded image
    });

    await newChild.save(); // Save the child document to MongoDB
    return NextResponse.json(newChild, { status: 201 });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image or save child" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
