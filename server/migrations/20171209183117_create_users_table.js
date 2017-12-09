exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('password').notNullable();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users');
