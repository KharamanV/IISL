exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('groups', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description');
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('groups');
