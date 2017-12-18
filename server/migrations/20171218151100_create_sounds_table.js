exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('sounds', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('transcription');
    table.boolean('is_screen');
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('sounds');
