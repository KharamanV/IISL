const cards = require('./data/speech_card');

exports.seed = (knex, Promise) => (
  knex('speech_card')
    .del()
    .then(() => knex('speech_card').insert(cards))
);
