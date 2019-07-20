const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = ({ email, phone, type }) => {
  return jwt.sign(
    { email, phone, type },
    secret,
    { expiresIn: '24h' }
  );
};