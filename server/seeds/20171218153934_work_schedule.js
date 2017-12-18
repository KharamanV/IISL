const schedules = require('./data/work_schedule');

exports.seed = (knex, Promise) => (
  knex('work_schedule')
    .del()
    .then(() => knex('work_schedule').insert(schedules))
);
