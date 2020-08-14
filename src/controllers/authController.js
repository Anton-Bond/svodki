const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const User = require('../models/user.model');

module.exports.login = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // find User in the database
  User.findByEmail(req.body.email, (err, data) => {
    if (err)
      res.status(404).json({
        message: err.message || 'Some error occurred while find the User.',
      });
    else {
      const passwordResult = bcrypt.compareSync(req.body.password, data.password)
      if (passwordResult) {
        // Генерация токена, пароли совпали
        const token = jwt.sign({
          email: data.email,
          userId: data.id,
          name: data.name,
          role: data.role
        }, keys.jwt, {expiresIn: 60 * 60})

        res.status(200).json({
          token: `Bearer ${token}`
        });
        // res.json(data);
      } else {
        res.status(401).json({
          message: 'Пароль не верный.',
        });
      }
    }
  });
};
