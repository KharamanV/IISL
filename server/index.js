const config = require('config');
const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');

const app = new Koa();

// Require db service

// Middlewares

app.use(cors());
app.use(bodyParser());
app.use(passport.initialize());

// Routes
app.use(require('./router'));

app.run = () => app.listen(config.port, () => console.log(`[Server] Listening on ${config.port} port`));

module.exports = app;
