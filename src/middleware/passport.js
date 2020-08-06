const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user.model');
const keys = require('../config/keys');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {

      User.findById(payload.userId, (err, data) => {
        if (err) {
          done(null, false);
        }
        else {
          done(null, data);
        }
      });
    })
  )
}
