exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('speech_screen', (table) => {
      table.increments('id').primary();
      table.integer('children_id');
      table.string('ff_perception');
      table.string('diagnosis');
      table.integer('study_year');
      table.timestamps(true);
    })
    .table('speech_screen', (table) => {
      table.foreign('children_id').references('children.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('speech_screen');
