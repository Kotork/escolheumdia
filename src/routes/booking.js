import express from "express";
import { bookingPage } from "../controllers/booking.js";

const bookingRouter = express.Router();

bookingRouter.get("/", bookingPage);

export default bookingRouter;
