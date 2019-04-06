const Owner = require('../models/Owner');
const CustomError = require('../errors/CustomError');
const { userExists } = require('../constants/errorMessageConstants');
const { successfulRegistration } = require('../constants/successMessageConstants');
const hashPass = require('../helpers/cryptoHelper');

module.exports = class AuthorizationRepository {

  static async registerOwner(ownerBody) {
    const owners = await Owner.find({email: ownerBody.email});
    if (owners.length > 0) throw new CustomError(userExists);
    await hashPass(ownerBody);
    const owner = new Owner(ownerBody);
    await owner.save();
    return {
      message: successfulRegistration,
      owner
    }
  }

};