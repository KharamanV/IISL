const Router = require('koa-router');
const { getPlan } = require('./controllers');

const router = new Router();

router.get('/individual_plans/:id', getPlan);

module.exports = router.routes();
