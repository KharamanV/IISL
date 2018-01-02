const Router = require('koa-router');
const { getCard } = require('./controllers');

const router = new Router();

router.get('/individual_cards/:id', getCard);

module.exports = router.routes();
