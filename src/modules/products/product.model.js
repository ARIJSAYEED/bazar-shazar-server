import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  ownerEmail: String,
  ownerName: String,
  price: String,
  category: String,
  description: String,
  image: String,
  stock: String,
  createdAt: Date,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
