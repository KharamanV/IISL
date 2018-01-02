const db = require('../../../services/db');

exports.getAnalysis = async (ctx) => {
  ctx.body = await db
    .select()
    .from('result_analysis')
    .where('children_id', ctx.params.id);
};
