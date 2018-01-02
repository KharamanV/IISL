const Router = require('koa-router');
const { getAnalysis } = require('./controllers');

const router = new Router();

router.get('/result_analysis/:id', getAnalysis);

module.exports = router.routes();
