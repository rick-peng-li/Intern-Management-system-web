import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({

    internName: String,

    completedTasks: Number,

    pendingTasks: Number,

    percentage: Number

})

const Progress = mongoose.model("Progress", progressSchema)

export default Progress