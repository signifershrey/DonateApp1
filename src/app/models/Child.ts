// models/Child.js

import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true }, // Image path (relative to /public/uploads)
  ebookLink: { type: String, required: true },
});

export default mongoose.models.Child || mongoose.model("Child", childSchema);
