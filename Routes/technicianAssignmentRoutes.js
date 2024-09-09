const express = require('express');
const router = express.Router();
const technicianAssignmentController = require('../Controllers/technicianAssignmentController');

router.get('/', technicianAssignmentController.getAllAssignments);
router.post('/', technicianAssignmentController.createAssignment);

module.exports = router;
