const screenSounds = require('./data/screen_sounds_rel');

exports.seed = (knex, Promise) => (
  knex('screen_sounds_rel')
    .del()
    .then(() => knex('screen_sounds_rel').insert(screenSounds))
);
