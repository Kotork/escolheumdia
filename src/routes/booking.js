import express from "express";
import { bookingPage } from "../controllers/booking.js";

const userRouter = express.Router();

userRouter.get("/", bookingPage);

export default userRouter;
