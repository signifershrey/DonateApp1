import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const campaignSchema = new Schema(
  {
    _id: { type: String, default: uuidv4 },
    campaignName: { type: String, required: true },
    amountCollected: { type: Number, default: 0 },
    amountSpent: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const Campaign =
  mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);

export default Campaign;
