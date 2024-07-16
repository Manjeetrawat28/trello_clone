const express = require('express');
const router = express.Router();
const { createProject, getProjects, getProjectDetails } = require('../controllers/projectController');
const auth = require('../middlewares/auth');

router.post('/', auth, createProject);
router.get('/', auth, getProjects);
router.get('/:id', auth, getProjectDetails);
    
module.exports = router;
