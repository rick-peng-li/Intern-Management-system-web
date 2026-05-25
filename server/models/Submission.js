import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({

    internName: {
        type: String,
        required: true
    },

    taskTitle: {
        type: String,
        required: true
    },

    githubLink: {
        type: String,
        required: true
    },

    submittedAt: {
        type: Date,
        default: Date.now
    }

})

const Submission = mongoose.model("Submission", submissionSchema)

export default Submission