const individualCards = require('./data/individual_card');

exports.seed = (knex, Promise) => (
  knex('individual_card')
    .del()
    .then(() => knex('individual_card').insert(individualCards))
);
