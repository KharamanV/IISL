const analysis = require('./data/result_analysis');

exports.seed = (knex, Promise) => (
  knex('result_analysis')
    .del()
    .then(() => knex('result_analysis').insert(analysis))
);
