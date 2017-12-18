exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('individual_plan', (table) => {
      table.increments('id').primary();
      table.integer('children_id');
      table.string('whistling');
      table.string('hissing');
      table.string('sonor');
      table.string('affricate');
      table.string('other_sounds');
      table.timestamps(true);
    })
    .table('individual_plan', (table) => {
      table.foreign('children_id').references('children.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('individual_plan');
