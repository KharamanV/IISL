exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('users_groups', (table) => {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.integer('group_id').notNullable();
    })
    .table('users_groups', (table) => {
      table.foreign('user_id').references('users.id');
      table.foreign('group_id').references('groups.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users_groups');
