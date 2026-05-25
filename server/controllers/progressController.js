import Progress from "../models/Progress.js";

// GET PROGRESS
export const getProgress = async (req, res) => {

    try {

        const progress = await Progress.find()

        return res.status(200).json({
            success: true,
            progress
        })

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })

    }

}