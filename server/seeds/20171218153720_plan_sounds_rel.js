const planSounds = require('./data/plan_sounds_rel');

exports.seed = (knex, Promise) => (
  knex('plan_sounds_rel')
    .del()
    .then(() => knex('plan_sounds_rel').insert(planSounds))
);
