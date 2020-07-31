const express = require('express');
const controller = require('../controllers/usersController');
const router = express.Router();

// get all users from db
router.get('/', controller.getAll);

// Create a new User
router.post('/', controller.create);

module.exports = router;