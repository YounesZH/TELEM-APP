const express = require('express');
const router = express.Router();
const siteController = require('../Controllers/siteController');

router.get('/', siteController.getAllSites);
router.post('/', siteController.createSite);

module.exports = router;
