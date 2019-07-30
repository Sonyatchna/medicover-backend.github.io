const express = require('express');
const app = express();
const mongoose = require('mongoose');
const initEndpoints = require('./helpers/initEndpoints');
const { port, localDB } = require('./config');
const { headers } = require('./middleware');

mongoose
  .connect(localDB, {useNewUrlParser: true})
  .catch(err => process.exit(1));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(headers);

initEndpoints(app);

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log('Listening...');
  console.log(`server is on http://localhost:${port}/`);
});