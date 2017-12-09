const config = require('config');
const knex = require('knex');

const { client, dbName: database, user, password } = config.db;
const db = knex({
  client,
  connection: {
    user,
    database,
    password,
    host: '127.0.0.1',
  },
});

module.exports = db;
