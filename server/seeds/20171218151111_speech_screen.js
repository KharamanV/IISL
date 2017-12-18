const screens = require('./data/speech_screen');

exports.seed = (knex, Promise) => (
  knex('speech_screen')
    .del()
    .then(() => knex('speech_screen').insert(screens))
);
