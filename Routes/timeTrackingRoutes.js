const express = require('express');
const router = express.Router();
const timeTrackingController = require('../Controllers/timeTrackingController');

router.get('/', timeTrackingController.getAllTimeTracking);
router.post('/', timeTrackingController.createTimeTracking);

module.exports = router;
