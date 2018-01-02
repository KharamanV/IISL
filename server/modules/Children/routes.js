const Router = require('koa-router');
const { getChildren, getChild } = require('./controllers');

const router = new Router();

router.get('/children', getChildren);
router.get('/children/:id', getChild);

module.exports = router.routes();
