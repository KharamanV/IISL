exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('classes_schedule', (table) => {
      table.increments('id').primary();
      table.integer('children_id');
      table.integer('group_number');
      table.integer('day');
      table.time('time');
      table.timestamps(true);
    })
    .table('classes_schedule', (table) => {
      table.foreign('children_id').references('children.id');
      table.foreign('group_number').references('children_groups.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('classes_schedule');
