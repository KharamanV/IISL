const users = require('./data/users');

exports.seed = (knex, Promise) => (
  knex('users')
    .del()
    .then(() => knex('users').insert(users))
);
