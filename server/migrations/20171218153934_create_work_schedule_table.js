exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('work_schedule', (table) => {
    table.increments('id').primary();
    table.string('day');
    table.time('start_time');
    table.time('end_time');
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('work_schedule');
