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
  editUser(id, username) {
    return knex('users').where({ id: id }).update({ name: username })
  }
  deleteUser(id) {
    return knex('users').where({ id: id }).del()
  }
}

export const k = new KnexLib();