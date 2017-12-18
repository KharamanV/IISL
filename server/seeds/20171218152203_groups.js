const groups = require('./data/groups');

exports.seed = (knex, Promise) => (
  knex('groups')
    .del()
    .then(() => knex('groups').insert(groups))
);
