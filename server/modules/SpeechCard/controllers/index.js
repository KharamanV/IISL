const db = require('../../../services/db');

exports.getSpeechCard = async (ctx) => {
  ctx.body = await db
    .select()
    .from('speech_card')
    .where('children_id', ctx.params.id);
};
