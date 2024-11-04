import mongoose, { Document, Schema, Model } from "mongoose";

interface IPaymentLinks extends Document {
  paypal: string;
  gofundme: string;
  venmo: string;
  sosusa: string;
  inash: string;
}

const PaymentLinksSchema: Schema = new Schema({
  paypal: { type: String, default: "" },
  gofundme: { type: String, default: "" },
  venmo: { type: String, default: "" },
  sosusa: { type: String, default: "" },
  inash: { type: String, default: "" },
});

const PaymentLinks: Model<IPaymentLinks> =
  mongoose.models.PaymentLinks ||
  mongoose.model<IPaymentLinks>("PaymentLinks", PaymentLinksSchema);

export default PaymentLinks;
export type { IPaymentLinks };
