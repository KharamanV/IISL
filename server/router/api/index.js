const Router = require('koa-router');
const { auth, security } = require('./auth');

const router = new Router();

router.use('/auth', auth);
router.use(security());

// Private routes below

module.exports = router.routes();
