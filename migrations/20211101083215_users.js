exports.up = function (knex) {
  console.log('users');
  return knex.schema.createTable('users', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
