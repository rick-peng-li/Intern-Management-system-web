import Intern from "../models/Intern.js";

export const addIntern = async (req, res) => {

    try {

        console.log(req.body)

        const { name, email, department } = req.body

        const newIntern = new Intern({
            name,
            email,
            department
        })

        await newIntern.save()

        return res.status(201).json({
            success: true,
            message: "Intern Added Successfully"
        })

    }

    catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            error: error.message
        })

    }

}


// GET ALL INTERNS
export const getInterns = async (req, res) => {

    try {

        const interns = await Intern.find()

        return res.status(200).json({
            success: true,
            interns
        })

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })

    }

}