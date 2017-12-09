const config = require('config');

const { client, dbName: database, user, password } = config.db;

module.exports = {
  development: {
    client,
    connection: { user, password, database },
    migrations: { directory: './server/migrations' },
    seeds: { directory: './server/seeds' },
  },
};
