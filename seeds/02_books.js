exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1, name: 'Livre 1', user_id: 1 },
        { id: 2, name: 'Libre 2', user_id: 2 },
        { id: 3, name: 'Livre 3', user_id: 1 },
      ]);
    });
};
