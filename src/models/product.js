// src/models/product.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  date: Date,
  reviewerName: String,
  reviewerEmail: String,
});

const productSchema = new mongoose.Schema(
  {
    id: Number,
    title: { type: String, required: true },
    description: String,
    category: String,
    price: { type: Number, required: true },
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    sku: String,
    weight: Number,
    tags: [String],
    images: [String],
    thumbnail: String,

    reviews: [reviewSchema],

    meta: {
      createdAt: Date,
      updatedAt: Date,
      barcode: String,
      qrCode: String,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;