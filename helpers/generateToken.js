const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = ({ email, phone }) => {
  return jwt.sign(
    { email, phone },
    secret,
    { expiresIn: '24h' }
  );
};