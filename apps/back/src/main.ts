/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { k } from '@tp01/knex-lib';
import knex from 'knex';

const app = express();

app.get('/api', (req, res) => {
  res.send({
    message: 'Welcome to back!',
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

function test() {
  k.HasMany('users', 'books', 'user_id', 1, ['id', 'name']);
}

test();
