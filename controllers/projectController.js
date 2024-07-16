const Project = require('../models/Project');
const Task = require('../models/Task');

const createProject = async (req, res) => {
    const { name, description } = req.body;
    try {
        const project = new Project({ name, description, user: req.user.id });
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.id });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getProjectDetails = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        const tasks = await Task.find({ project: req.params.id });
        res.json({ project, tasks });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createProject, getProjects, getProjectDetails };
