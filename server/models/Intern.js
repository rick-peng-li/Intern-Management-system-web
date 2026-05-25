import mongoose from "mongoose";

const internSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    department: {
        type: String,
        required: true
    }

})

const Intern = mongoose.model("Intern", internSchema)

export default Intern