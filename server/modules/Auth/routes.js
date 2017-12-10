const Router = require('koa-router');
const config = require('config');
const jwt = require('jsonwebtoken');
const { local } = require('../../services/auth');

const router = new Router();

router.post('/login', local(), (ctx) => {
  ctx.body = { token: jwt.sign({ sub: ctx.state.user.id }, config.secrets.jwt) };
});

module.exports = router.routes();
