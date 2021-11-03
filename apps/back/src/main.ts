/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { k } from '@tp01/knex-lib';
const app = express();
app.use(express.json());

app.get('/api/books', (req, res) => {
  k.getAllBooks().then(books => res.send(books))
});

app.post('/api/user/create', (req, res) => {
  k.createUser(req.body.username).then(res.send("Books created successfully"))
});

app.put('/api/user', (req, res) => {
  k.editUser(req.body.id, req.body.name).then(res.send('User modify'))
})

app.delete('/api/user/:id', (req, res) => {
  k.deleteUser(req.params.id).then(res.send('User Deleted'))
})




const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


