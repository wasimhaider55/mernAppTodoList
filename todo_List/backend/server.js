
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/connectDB.js";
import mongoose from "mongoose";
// import Task from "../models/taskModel.js"
// import taskRoute from "../backend/controller/taskController.js";
import TaskRouters from "../backend/routes/taskRoute.js"
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/task", TaskRouters);


app.get("/", (req, res) => {
    res.send("Home Page......");
})



const PORT = process.env.PORT || 8800;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on the ${PORT} `);
        })

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
startServer();



