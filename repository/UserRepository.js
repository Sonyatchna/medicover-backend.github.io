const User = require('../models/User');
const CustomError = require('../errors/CustomError');
const { userExists } = require('../constants/errorMessageConstants');
const { successfulRegistration } = require('../constants/successMessageConstants');
const hashPass = require('../helpers/cryptoHelper');

module.exports = class AuthorizationRepository {

  static async registerUser(userBody) {
    const users = await User.find({email: userBody.email});
    if (users.length > 0) throw new CustomError(userExists);
    await hashPass(userBody);
    const user = new User(userBody);
    await user.save();
    return {
      message: successfulRegistration,
      user
    }
  }

};