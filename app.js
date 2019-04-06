const express = require('express');
const app = express();
const mongoose = require('mongoose');
const initEndpoints = require('./helpers/initEndpoints');
const { port, localDB } = require('./config');

mongoose
  .connect(localDB, {useNewUrlParser: true})
  .catch(err => process.exit(1));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "*");
  res.header(
    "Access-Control-Allow-Credentials",
    true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Access-Token",
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.header(
    "Access-Control-Expose-Headers",
    "Content-Type, Content-Disposition"
  );
  next();
});

initEndpoints(app);

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log('Listening...');
  console.log(`server is on http://localhost:${port}/`);
});