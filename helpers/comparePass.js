const bcrypt = require('bcrypt');
const CustomError = require('../errors/CustomError');
const { notCorrectPass } = require('../constants/errorMessageConstants');

const comparePassword = (password, hashedPassword) => {
  try {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hashedPassword, function (err, result) {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    })
  } catch (err) {
    return new CustomError(notCorrectPass);
  }
};

module.exports = comparePassword;