import express from "express";

import {
    addSubmission,
    getSubmissions
} from "../controllers/submissionController.js";

const router = express.Router()

router.post("/add", addSubmission)

router.get("/", getSubmissions)

export default router
