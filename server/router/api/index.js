const Router = require('koa-router');
const auth = require('../../modules/Auth/routes');

const router = new Router();

router.use(auth);

module.exports = router.routes();
