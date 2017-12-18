const children = require('./data/children');

exports.seed = (knex, Promise) => (
  knex('children')
    .del()
    .then(() => knex('children').insert(children))
);
