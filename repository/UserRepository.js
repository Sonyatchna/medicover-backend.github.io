const User = require('../models/User');
const CustomError = require('../errors/CustomError');
const { notCorrectPass, notCorrectLogin, userExists } = require('../constants/errorMessageConstants');
const { successfulAuthorization, successfulRegistration } = require('../constants/successMessageConstants');
const hashPass = require('../helpers/cryptoHelper');
const generateToken = require('../helpers/generateToken');
const comparePass = require('../helpers/comparePass');

module.exports = class AuthorizationRepository {

  static async login(userBody) {
    const user = await User.find({email: userBody.email}).exec();
    if (user.length === 1) {
      if (await comparePass(userBody.password, user[0].password)) {
        const token = generateToken({email: userBody.email, phone: userBody.phone});
        return {
          success: true,
          message: successfulAuthorization,
          token,
          user
        }
      } else {
        throw new CustomError(notCorrectPass);
      }
    } else {
      throw new CustomError(notCorrectLogin);
    }
  }

  static async register(userBody) {
    const users = await User.find({email: userBody.email});
    if (users.length > 0) throw new CustomError(userExists);
    userBody.password = hashPass(userBody.password);
    const user = new User(userBody);
    user.save();
    return {
      message: successfulRegistration,
      user
    }
  }

};