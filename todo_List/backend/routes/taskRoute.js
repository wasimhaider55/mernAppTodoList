import express from "express";
// import Task from "../models/taskModel";
import { createTask, getTasks, getTask, deleteTask, updateTask } from "../controller/taskController.js";

const router = express.Router();


router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;