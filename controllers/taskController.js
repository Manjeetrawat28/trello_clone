const Task = require('../models/Task');

const createTask = async (req, res) => {
    const { name, description, status, tags, dueDate, assignedUser, project } = req.body;
    try {
        const task = new Task({ name, description, status, tags, dueDate, assignedUser, project });
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createTask, getTasks, updateTask };
