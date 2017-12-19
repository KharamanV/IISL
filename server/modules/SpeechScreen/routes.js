const Router = require('koa-router');
const { getScreens } = require('./controllers');

const router = new Router();

router.get('/speech_screens', getScreens);

module.exports = router.routes();
