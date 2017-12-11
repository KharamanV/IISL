const Router = require('koa-router');
const { jwt } = require('../../services/auth');
const auth = require('../../modules/Auth/routes');
const children = require('../../modules/Children/routes');

const router = new Router();

router.use(auth);
router.use(jwt());
router.use(children);

module.exports = router.routes();
