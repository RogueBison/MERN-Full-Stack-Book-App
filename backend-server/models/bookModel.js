const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: String,
      required: true,
    },
    genres: {
      type: Schema.Types.Mixed,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: Number,
    salePrice: { type: Number, default: 0 },
    publication: String,
    monthlyBook: Boolean,
    path: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
