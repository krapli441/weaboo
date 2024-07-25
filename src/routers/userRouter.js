import express from "express";
import { edit } from "../controllers/userControllers";
import { deleteUser } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUser);

export default userRouter;
