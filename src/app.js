import express from "express";
import productRouter from "./modules/products/product.route.js";
import userRouter from "./modules/users/user.route.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productRouter);
app.use("/users", userRouter);

export default app;
