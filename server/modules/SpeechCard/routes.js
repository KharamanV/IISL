const Router = require('koa-router');
const { getSpeechCard } = require('./controllers');

const router = new Router();

router.get('/speech_cards/:id', getSpeechCard);

module.exports = router.routes();
