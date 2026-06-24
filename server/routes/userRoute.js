import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFav,
  toFav,
} from "../controllers/userCntrl.js";
import clerkCheck from "../config/clerkConfig.js";
const router = express.Router();

router.post("/register", clerkCheck, createUser);
router.post("/bookVisit/:id", clerkCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", clerkCheck, cancelBooking);
router.post("/toFav/:rid", clerkCheck, toFav);
router.post("/allFav/", clerkCheck, getAllFav);
export { router as userRoute };