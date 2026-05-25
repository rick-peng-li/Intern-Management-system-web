import express from "express";

import {
    addTask,
    getTasks
} from "../controllers/taskController.js";

const router = express.Router()

router.post("/add", addTask)

router.get("/", getTasks)

export default router