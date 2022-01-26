import express from "express";
import { bookingPage, bookingClientPage, bookingClientPage2 } from "../controllers/booking.js";

const bookingRouter = express.Router();

bookingRouter.get("/", bookingPage);
bookingRouter.get("/:client", bookingClientPage);
bookingRouter.get("/:client/:service", bookingClientPage2);
bookingRouter.get("/:client/:service/:staff", bookingClientPage3);

export default bookingRouter;
