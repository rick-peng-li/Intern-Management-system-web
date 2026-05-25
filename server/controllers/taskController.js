import Task from "../models/Task.js"; // Make sure your Task model exists!

// ADD TASK
export const addTask = async (req, res) => {
    try {
        const { title, description, assignedTo } = req.body;

        const newTask = new Task({
            title,
            description,
            assignedTo
        });

        await newTask.save();

        return res.status(201).json({
            success: true,
            message: "Task Added Successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// GET ALL TASKS
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        return res.status(200).json({
            success: true,
            tasks
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};