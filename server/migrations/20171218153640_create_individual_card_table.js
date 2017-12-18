exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('individual_card', (table) => {
      table.increments('id').primary();
      table.integer('children_id').notNullable();
      table.string('motility');
      table.string('pronunciation');
      table.string('syllable_word_structure');
      table.string('color_perception');
      table.string('spatial_perception');
      table.string('items_compare');
      table.boolean('eyes_count_operations');
      table.boolean('is_beginning');
      table.timestamps(true);
    })
    .table('individual_card', (table) => {
      table.foreign('children_id').references('children.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('individual_card');
