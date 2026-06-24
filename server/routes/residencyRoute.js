import express from "express";
import { createResidency, getAllResidencies, getResidency } from "../controllers/resdCntrl.js";
import clerkCheck from "../config/clerkConfig.js";
const router = express.Router();

router.post("/create", clerkCheck, createResidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getResidency)
export {router as residencyRoute}