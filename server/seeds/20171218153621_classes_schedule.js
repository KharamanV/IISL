const classesSchedule = require('./data/classes_schedule');

exports.seed = (knex, Promise) => (
  knex('classes_schedule')
    .del()
    .then(() => knex('classes_schedule').insert(classesSchedule))
);
