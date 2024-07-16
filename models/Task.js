const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Backlog', 'In Discussion', 'In Progress', 'Done'], default: 'Backlog' },
    tags: [{ type: String }],
    dueDate: { type: Date },
    assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = mongoose.model('Task', TaskSchema);
