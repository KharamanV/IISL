exports.up = (knex, Promise) => (
  knex.schema
    .createTableIfNotExists('screen_sounds_rel', (table) => {
      table.integer('speech_screen_id');
      table.integer('sound_id');
      table.integer('progress_mark_id');
    })
    .table('screen_sounds_rel', (table) => {
      table.foreign('speech_screen_id').references('speech_screen.id');
      table.foreign('sound_id').references('sounds.id');
      table.foreign('progress_mark_id').references('progress_marks.id');
    })
);

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('screen_sounds_rel');
