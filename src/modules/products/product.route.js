import express from "express";
import {
  createAProduct,
  deleteProductController,
  getAllProducts,
} from "./product.controller.js";

const productRouter = express.Router();

productRouter.post("/", createAProduct);
productRouter.get("/", getAllProducts);
productRouter.delete("/:id", deleteProductController);

export default productRouter;
