exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('phone');
    table.timestamps(true);
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users');
