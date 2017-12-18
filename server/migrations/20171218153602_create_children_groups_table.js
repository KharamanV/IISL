exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('children_groups', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('children_groups');
