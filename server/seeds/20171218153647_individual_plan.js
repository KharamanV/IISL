const plans = require('./data/individual_plan');

exports.seed = (knex, Promise) => (
  knex('individual_plan')
    .del()
    .then(() => knex('individual_plan').insert(plans))
);
