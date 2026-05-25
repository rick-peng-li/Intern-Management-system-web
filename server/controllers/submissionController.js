import Submission from "../models/Submission.js";

// ADD SUBMISSION
export const addSubmission = async (req, res) => {
console.log("Received submission request body:", req.body);
    try {

        const {
            internName,
            taskTitle,
            githubLink
        } = req.body

        const newSubmission = new Submission({
            internName,
            taskTitle,
            githubLink
        })

        await newSubmission.save()

        return res.status(201).json({
            success: true,
            message: "Submission Added"
        })

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })

    }

}

// GET SUBMISSIONS
export const getSubmissions = async (req, res) => {

    try {

        const submissions = await Submission.find()

        return res.status(200).json({
            success: true,
            submissions
        })

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })

    }

}