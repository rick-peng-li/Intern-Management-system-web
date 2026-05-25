import express from "express";

import {
    getFeedback
} from "../controllers/feedbackController.js";

const router = express.Router()

router.get("/", getFeedback)

export default router