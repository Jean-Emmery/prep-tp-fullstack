// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'tp01',
      user: 'root',
      password: '',
      port: 3306,
      charset: 'utf8',
    },
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
