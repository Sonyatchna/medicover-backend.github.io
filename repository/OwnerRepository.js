const Owner = require('../models/Owner');
const CustomError = require('../errors/CustomError');
const { notCorrectPass, notCorrectLogin, userExists } = require('../constants/errorMessageConstants');
const { successfulAuthorization, successfulRegistration } = require('../constants/successMessageConstants');
const hashPass = require('../helpers/cryptoHelper');
const generateToken = require('../helpers/generateToken');
const comparePass = require('../helpers/comparePass');

module.exports = class AuthorizationRepository {

  static async login(ownerBody) {
    const owner = await Owner.find({email: ownerBody.email}).exec();
    if (owner.length === 1) {
      if (await comparePass(ownerBody.password, owner[0].password)) {
        const token = generateToken({email: ownerBody.email, phone: ownerBody.phone});
        return {
          success: true,
          message: successfulAuthorization,
          token,
          owner
        }
      } else {
        throw new CustomError(notCorrectPass);
      }
    } else {
      throw new CustomError(notCorrectLogin);
    }
  }

  static async register(ownerBody) {
    const owners = await Owner.find({email: ownerBody.email});
    if (owners.length > 0) throw new CustomError(userExists);
    ownerBody.password = hashPass(ownerBody.password);
    const owner = new Owner(ownerBody);
    owner.save();
    return {
      message: successfulRegistration,
      owner
    }
  }

};