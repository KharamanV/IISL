exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('speech_card', (table) => {
      table.increments('id').primary();
      table.integer('children_id');
      table.integer('peu_number');
      table.date('enrollment_date');
      table.string('parent_complaints');
      table.string('native_language');
      table.string('motility_state');
      table.string('hearing');
      table.string('general_development');
      table.string('attention');
      table.string('efficiency');
      table.string('memory');
      table.string('voice');
      table.string('timbre');
      table.string('breath');
      table.string('diction');
      table.string('vocal_cords');
      table.string('teeth');
      table.string('lips');
      table.string('tongue');
      table.string('bite');
      table.string('movement');
      table.timestamps(true);
    })
    .table('speech_card', (table) => {
      table.foreign('children_id').references('children.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('speech_card');
