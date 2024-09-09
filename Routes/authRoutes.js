const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

// Route pour l'inscription (signup)
router.post('/signup', authController.signup);

// Route pour la connexion (login)
router.post('/login', authController.login);

module.exports = router;
