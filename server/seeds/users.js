const bcrypt = require('bcrypt');

const user = {
  id: 1,
  name: 'admin',
  password: bcrypt.hashSync('admin', 4),
};

exports.seed = (knex, Promise) => (
  knex('users')
    .del()
    .then(() => knex('users').insert(user))
);
