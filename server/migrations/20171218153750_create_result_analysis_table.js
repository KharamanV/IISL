exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('result_analysis', (table) => {
      table.increments('id').primary();
      table.integer('children_id');
      table.date('date');
      table.text('description');
      table.timestamps(true);
    })
    .table('result_analysis', (table) => {
      table.foreign('children_id').references('children.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('result_analysis');
