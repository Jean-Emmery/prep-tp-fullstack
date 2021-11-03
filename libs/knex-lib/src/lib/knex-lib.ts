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
  HasMany(model, ref, column, id, _select) {
    const select = _select;
    let select_string = '';

    select.map((item, i, arr) => {
      if (arr.length - 1 === i) {
        select_string += 'r.' + item;
      } else {
        select_string += 'r.' + item + ', ';
      }
    });
    knex
      .raw(
        'select distinct ' +
          select_string +
          ' from ' +
          ref +
          ' r inner join ' +
          model +
          ' m where r.' +
          column +
          ' = ' +
          id
      )
      .then((item) => {
        console.log(item[0]);
      })
      .catch((err) => console.error(err));
  }
  
}

export const k = new KnexLib();
