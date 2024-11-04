
import mongoose from "mongoose";

const DonationsSchema = new mongoose.Schema({
  totalDonations: { type: Number, default: 0 },
  paypalDonations: { type: Number, default: 0 },
  zelleDonations: { type: Number, default: 0 },
  venmoDonations: { type: Number, default: 0 },
});

export default mongoose.models.Donations ||
  mongoose.model("Donations", DonationsSchema);
