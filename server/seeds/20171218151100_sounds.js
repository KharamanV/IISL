const sounds = require('./data/sounds');

exports.seed = (knex, Promise) => (
  knex('sounds')
    .del()
    .then(() => knex('sounds').insert(sounds))
);
