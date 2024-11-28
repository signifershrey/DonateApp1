import mongoose from "mongoose";
// import Grid from "gridfs-stream";
import dotenv from "dotenv";

dotenv.config();

let gfs;

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log("Connected to MongoDB");

      // Initialize GridFSStream
      // gfs = Grid(connection.db, mongoose.mongo);
      // gfs.collection("uploads"); // Files will be stored in the "uploads" collection
    });
  } catch (error) {
    console.log("Something went wrong in connecting to DB");
    console.error(error);
  }
}

export { gfs };
