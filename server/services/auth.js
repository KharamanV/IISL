const config = require('config');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const {
  Strategy: JwtStrategy,
  ExtractJwt,
} = require('passport-jwt');
const bcrypt = require('bcrypt');
const db = require('./db');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secrets.jwt,
};

passport.use(new LocalStrategy((username, password, done) => (
  db.select()
    .from('users')
    .where('name', username)
    .first()
    .then(user => user || done(null, false, { message: 'Incorrect username' }))
    .then(user => (
      bcrypt.compare(password, user.password)
        .then(res => (
          res
            ? done(null, user)
            : done(null, false, { message: 'Incorrect password.' })
        ))
    ))
    .catch(done)
)));

passport.use(new JwtStrategy(opts, (payload, done) => (
  db.select()
    .from('users')
    .where('id', payload.sub)
    .then(user => done(null, user || false))
    .catch(done)
)));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => (
  db.select()
    .from('users')
    .where('id', id)
    .then(user => done(null, user || false))
    .catch(done)
));

module.exports = {
  jwt: () => passport.authenticate('jwt', { session: false }),
  local: () => passport.authenticate('local'),
};
