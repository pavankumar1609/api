const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        title: { type: String },
        desc: { type: String },
        img: { type: String },
        size: { type: String },
        color: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        totalPrice: { type: Number },
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, default: "completed" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
