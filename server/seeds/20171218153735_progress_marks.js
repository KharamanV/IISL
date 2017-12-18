const marks = require('./data/progress_marks');

exports.seed = (knex, Promise) => (
  knex('progress_marks')
    .del()
    .then(() => knex('progress_marks').insert(marks))
);
