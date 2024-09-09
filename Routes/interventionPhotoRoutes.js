const express = require('express');
const router = express.Router();
const interventionPhotoController = require('../Controllers/interventionPhotoController');

router.get('/', interventionPhotoController.getAllPhotos);
router.post('/', interventionPhotoController.createPhoto);

module.exports = router;
