exports.up = function (knex) {
  return knex.schema.createTable('books', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNull()
      .onUpdate('cascade')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('books');
};
