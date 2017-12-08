const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.2',
    user: 'user',
    password: '',
    database: 'logoped',
  },
});

module.exports = db;
