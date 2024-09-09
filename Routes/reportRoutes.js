const express = require('express');
const router = express.Router();
const reportController = require('../Controllers/reportController');

router.get('/', reportController.getAllReports);
router.post('/', reportController.createReport);

module.exports = router;
