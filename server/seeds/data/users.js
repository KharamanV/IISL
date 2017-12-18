const bcrypt = require('bcrypt');

module.exports = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin', 4),
    email: 'admin@admin.com',
    first_name: 'Geralt',
    last_name: 'Rivian',
    phone: '+380981488533',
  },
];
