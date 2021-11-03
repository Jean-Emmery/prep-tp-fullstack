const options = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp01',
  },
};

const knex = require('knex')(options);

class KnexLib {
  getAllBooks() {
    return knex('users').select('*')
  }
  createUser(username) {
    return knex('users').insert({ name: username })
  }
}

export const k = new KnexLib();