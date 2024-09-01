const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const basketSchema = new Schema(
  {
    basketItems: [
      {
        book: {
          path: { type: String, required: true },
          title: { type: String, required: true },
          authors: { type: String, required: true },
          publication: { type: String, required: true },
          description: { type: String, required: true },
          price: { Type: Number, required: true },
        },
        quantity: { type: Number, default: 1 },
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Requires a valid user id"],
    },
    subtotal: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Basket", basketSchema);
