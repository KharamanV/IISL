const db = require('../../../services/db');

exports.getPlan = async (ctx) => {
  ctx.body = await db
    .select()
    .from('individual_plan')
    .where('children_id', ctx.params.id);
};
