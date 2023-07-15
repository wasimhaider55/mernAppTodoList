import Task from "../models/taskModel.js";

// create a task
export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// get/read all tasks 
export const getTasks = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
// get/read single  task 
export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`task not found at the id  ${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// delete a   task 
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json(`task not found at the id  ${id}`)
        }
        res.status(200).json("task deleted");
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// update a   task 
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id }, req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!task) {
            return res.status(404).json(`task not found at the id  ${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

