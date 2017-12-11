const Router = require('koa-router');
const db = require('../../services/db');

const router = new Router();

router.get('/children', async (ctx) => {
  ctx.body = await db.select().from('children');
});

module.exports = router.routes();
