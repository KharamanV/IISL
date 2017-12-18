const childrenGroups = require('./data/children_groups');

exports.seed = (knex, Promise) => (
  knex('children_groups')
    .del()
    .then(() => knex('children_groups').insert(childrenGroups))
);
