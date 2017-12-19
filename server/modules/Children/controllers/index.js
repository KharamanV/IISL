const db = require('../../../services/db');

exports.getChildren = async (ctx) => {
  ctx.body = await db
    .select('children.*', 'children_groups.name as group_name')
    .from('children')
    .leftJoin('children_groups', 'children.group_number', 'children_groups.id');
};
