const Router = require('koa-router');
const { jwt } = require('../../services/auth');
const auth = require('../../modules/Auth/routes');
const children = require('../../modules/Children/routes');
const screens = require('../../modules/SpeechScreen/routes');

const router = new Router();

router.use(auth);
router.use(jwt());
router.use(children);
router.use(screens);

module.exports = router.routes();
