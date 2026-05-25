import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({

    internName: String,

    feedback: String,

    rating: Number

})

const Feedback = mongoose.model("Feedback", feedbackSchema)

export default Feedback