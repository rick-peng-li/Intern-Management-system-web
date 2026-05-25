import express from "express";
import { addIntern, getInterns } from "../controllers/internController.js";

const router = express.Router()

// ADD INTERN
router.post("/add", addIntern)

// GET ALL INTERNS
router.get("/", getInterns)

export default router