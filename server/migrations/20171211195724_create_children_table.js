exports.up = (knex, Promise) => (
  knex.schema.createTableIfNotExists('children', (table) => {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.string('address');
    table.string('photo');
    table.integer('protocol_number');
    table.integer('group_number');
    table.date('date').notNullable();
    table.date('date_PMPC').notNullable();
    table.timestamps(true);
  })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('children');
