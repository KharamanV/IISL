const config = require('config');
const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const {
  Strategy: JwtStrategy,
  ExtractJwt,
} = require('passport-jwt');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secrets.jwt,
};

passport.use(new JwtStrategy(opts, (payload, done) => (
  User.findOne({ _id: payload.sub })
    .then(user => done(null, user || false))
    .catch(done)
)));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => (
  User.findById(id)
    .then(user => done(null, user))
    .catch(done)
));

router.post('/', passport.authenticate('local'), (req, res) => res.json({
  token: jwt.sign({ sub: req.user.id }, config.secrets.jwt),
}));

router.get('/', passport.authenticate('jwt'), (req, res) => {
  User.findById(req.user.id)
    .then(user => res.sendStatus(user ? 200 : 401))
    .catch(console.error);
});

router.get('/name', passport.authenticate('jwt'), (req, res) => {
  User.findById(req.user.id)
    .then(user => {
      if (user) res.json({ name: user.name });
      else res.sendStatus(401);
    })
    .catch(err => console.log(err));
});

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        let newUser = new User({
          username: req.body.username,
          password: req.body.password,
          role: 'player',
          name: req.body.name,
          _id: mongoose.Types.ObjectId(),
        });

        newUser.save((err) => {
          if (err) return console.log("didn't save user");
          return res.json({ token: jwt.sign({ sub: newUser.id }, config.secrets.jwt) });
        });
      } else {
        res.sendStatus(409);
      }
    })
    .catch(console.error)
});

module.exports = {
  auth: router,
  security: () => passport.authenticate('jwt', { session: false }),
};
