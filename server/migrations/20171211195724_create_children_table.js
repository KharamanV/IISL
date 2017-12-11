exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('children', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('age').notNullable();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('children');
