exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('progress_marks', (table) => {
    table.increments('id').primary();
    table.string('description');
    table.string('symbol');
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('progress_marks');
