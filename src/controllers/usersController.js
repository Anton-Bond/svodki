const bcrypt = require('bcryptjs');

const User = require('../models/user.model');

module.exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // find User in the database
  User.findByEmail(req.body.user.email, (err, data) => {
    if (err) {
      // user exist with that email
      if (err.noExistUser) {
        // Create a User
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.user.password;
        const user = new User({
          email: req.body.user.email,
          password: bcrypt.hashSync(password, salt),
          name: req.body.user.name,
          role: req.body.user.role
        });

        // Save User in the database
        User.create(user, (err, data) => {
          if (err)
            res.status(500).send({
              message: err.message || 'Some error occurred while creating the User.',
            });
          else res.send(data);
        });
      } else {
        res.status(404).json({
          message: 'Some error occurred while find the User.',
        });
      }
    } else {
      res.status(409).json({
        message: 'Такой email уже занят. Попробуйте другой.'
      })
    }
  });
};

// Retrieve all Users from the database
module.exports.getAll = async (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      });
    else res.send(data);
  });
};

// Find a single User with a userId
module.exports.findById = async (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving User with id ' + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Update a User identified by the userId in the request
module.exports.update = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  console.log(req.params)

  User.updateById(req.params.userId, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error updating User with id ' + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Update a User password by the userId in the request
module.exports.updatePassw = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const password = req.body.password;

  User.updatePasswById(req.params.userId, bcrypt.hashSync(password, salt), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error updating User with id ' + req.params.userId,
        });
      }
    } else res.send(data);
  });
};


// Delete a User with the specified userId in the request
module.exports.deleteOne = async (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: 'Could not delete User with id ' + req.params.userId,
        });
      }
    } else {
      res.send({ message: `User was deleted successfully!` });
    }
  });
};

// Delete all Users from the database.
module.exports.deleteAll = async (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all users.',
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};
