const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const { notGetToken, notValidToken } = require('../constants/errorMessageConstants');
const CustomError = require('../errors/CustomError');

const checkToken = (req, res, next) => {
  try {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('JWT ')) {
      token = token.split(' ')[1];
    }
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          throw new CustomError(notValidToken);
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      throw new CustomError(notGetToken);
    }
  } catch (error) {
    res.status(error.status);
    res.send(error);
  }
};

module.exports = checkToken;