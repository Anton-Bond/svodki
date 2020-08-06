const express = require('express');
const controller = require('../controllers/usersController');
const router = express.Router();

// get all users from db
router.get('/', controller.getAll);

// Create a new User
router.post('/', controller.create);

// Retrieve a single User with userId
router.get('/:userId', controller.findById);

// Update a User with userId
router.put('/:userId', controller.update);

// Delete a User with userId
router.delete('/:userId', controller.deleteOne);

// delete all Users
router.delete('/', controller.deleteAll);

module.exports = router;
