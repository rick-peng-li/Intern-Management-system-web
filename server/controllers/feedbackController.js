import Feedback from "../models/Feedback.js";

// GET FEEDBACK
export const getFeedback = async (req, res) => {

    try {

        const feedback = await Feedback.find()

        return res.status(200).json({
            success: true,
            feedback
        })

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })

    }

}