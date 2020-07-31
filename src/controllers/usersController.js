const User = require('../models/user.model');

module.exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User(req.body.user);
  console.log(user)

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

module.exports.getAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};















// const errorHandler = require('../utils/errorHandler');
// const pool = require('../data/config');

// module.exports.getAll = async (req, res) => {
//   pool.query('SELECT * FROM users', (err, data) => {
//     if(err) {
//       return errorHandler(res, err);
//     }
//     res.status(201).send(data);
//   });

// }

// module.exports.add = async (req, res) => {

//   if(!req.body) return res.sendStatus(400);
//   const name = req.body.name;
//   const age = req.body.age;
  

//   pool.query('INSERT INTO users (name, age) VALUES (?,?)', [name, age], (err, data) => {
//     if(err) {
//       return errorHandler(res, err);
//     }
//     res.status(200).send({name, age});
//   });

// }