const bcrypt = require('bcrypt');

const user = {
  name: 'admin',
  password: bcrypt.hashSync('admin', 4),
};

exports.seed = (knex, Promise) => (
  knex('users')
    .del()
    .then(() => knex('users').insert(user))
);
