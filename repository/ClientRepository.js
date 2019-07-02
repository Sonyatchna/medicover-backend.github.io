const Client = require('../models/Client');
const CustomError = require('../errors/CustomError');
const { userExists } = require('../constants/errorMessageConstants');
const { successfulRegistration } = require('../constants/successMessageConstants');
const hashPass = require('../helpers/cryptoHelper');

module.exports = class AuthorizationRepository {

  static async registerClient(clientBody) {
    const clients = await User.find({email: clientBody.email});
    if (clients.length > 0) throw new CustomError(userExists);
    await hashPass(clientBody);
    const client = new Client(clientBody);
    await client.save();
    return {
      message: successfulRegistration,
      client
    }
  }

};