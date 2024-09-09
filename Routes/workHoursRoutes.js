const express = require('express');
const router = express.Router();
const workHoursController = require('../Controllers/workHoursController');

router.get('/', workHoursController.getAllWorkHours);
router.post('/', workHoursController.createWorkHours);

module.exports = router;
