exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('plan_sounds_rel', (table) => {
      table.integer('individual_plan_id');
      table.integer('sound_id');
      table.boolean('is_done');
    })
    .table('plan_sounds_rel', (table) => {
      table.foreign('individual_plan_id').references('individual_plan.id');
      table.foreign('sound_id').references('sounds.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('plan_sounds_rel');
