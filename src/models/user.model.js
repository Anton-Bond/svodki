const sql = require('../data/db.js');

// constructor
class User {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
    this.role = user.role;
  }
}

User.create = (newUser, result) => {
  sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created user: ', { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.getAll = (result) => {
  sql.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('users: ', res);
    result(null, res);
  });
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found user: ', res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ message: 'not_found' }, null);
  });
};

User.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM users WHERE email = "${email}"`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found user: ', res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({
      message: 'Такого пользователя не существует.',
      noExistUser: true
    }, null);
  });
};

User.updateById = (id, user, result) => {

  // console.log('update from model >> ', id);
  sql.query(
    'UPDATE users SET email = ?, name = ?, role = ? WHERE id = ?',
    [user.email, user.name, user.role, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated user: ', { id: id, ...user });
      result(null, { id: id, ...user });
    },
  );
};


User.updatePasswById = (id, passw, result) => {
  sql.query(
    'UPDATE users SET password = ? WHERE id = ?',
    [passw, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated password user with id: ', id);
      result(null, id);
    },
  );
};

User.remove = (id, result) => {
  sql.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted User with id: ', id);
    result(null, res);
  });
};

User.removeAll = (result) => {
  sql.query('DELETE FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = User;
