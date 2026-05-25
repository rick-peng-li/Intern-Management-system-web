import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'
import internRoutes from "./routes/internRoutes.js"
import taskRoutes from "./routes/taskRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
const app = express()

// Database Connection
connectToDatabase()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/intern', internRoutes)
app.use("/api/task", taskRoutes)
app.use("/api/submission", submissionRoutes);
app.use("/api/progress", progressRoutes)
app.use("/api/feedback", feedbackRoutes)
// Server
app.listen(process.env.PORT || 5000, () => {

    console.log(`server is running on port ${process.env.PORT}`)

})