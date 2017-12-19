const db = require('../../../services/db');

exports.getScreens = async (ctx) => {
  ctx.body = await db.select()
    .from('speech_screen');
};
