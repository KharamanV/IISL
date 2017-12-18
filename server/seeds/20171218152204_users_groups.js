const usersGroups = require('./data/users_groups');

exports.seed = (knex, Promise) => (
  knex('users_groups')
    .del()
    .then(() => knex('users_groups').insert(usersGroups))
);
