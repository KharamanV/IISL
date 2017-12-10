const path = require('path');
const Router = require('koa-router');
const send = require('koa-send');

const router = new Router();

router.use('/api', require('./api'));

if (process.env.NODE_ENV === 'production') {
  router.get('*', ctx => send(ctx, path.resolve('dist/index.html')));
}

module.exports = router.routes();
