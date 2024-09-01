const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const basketSchema = new Schema(
  {
    basketItems: [
      {
        book: {
          path: { type: String },
          title: { type: String },
          authors: { type: String },
          publication: { type: String },
          description: { type: String },
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
