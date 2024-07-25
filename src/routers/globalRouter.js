import express from "express";
import { join } from "../controllers/userControllers";
import { trending } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.ger("/join", join);

export default globalRouter;
