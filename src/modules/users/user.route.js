import express from "express";
import getAllUser from "./user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;
