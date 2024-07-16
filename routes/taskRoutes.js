const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask } = require('../controllers/taskController');
const auth = require('../middlewares/auth');

router.post('/', auth, createTask);
router.get('/:projectId', auth, getTasks);
router.put('/:id', auth, updateTask);

module.exports = router;
