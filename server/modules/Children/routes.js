const Router = require('koa-router');
const { getChildren } = require('./controllers');

const router = new Router();

router.get('/children', getChildren);

module.exports = router.routes();
