const db = require('../../../services/db');

exports.getCard = async (ctx) => {
  ctx.body = await db
    .select()
    .from('individual_card')
    .where('children_id', ctx.params.id);
};
