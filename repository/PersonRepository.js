const Client = require('../models/Client');
const MedicalStaff = require('../models/MedicalStaff');
const _ = require('lodash');
const CustomError = require('../errors/CustomError');
const { notCorrectPass, notCorrectLogin } = require('../constants/errorMessageConstants');
const { successfulAuthorization } = require('../constants/successMessageConstants');
const generateToken = require('../helpers/generateToken');
const comparePass = require('../helpers/comparePass');

module.exports = class AuthorizationRepository {

  static async login(loginBody) {
    const people = [...await MedicalStaff.find({email: loginBody.email}).lean().exec(), ...await Client.find({email: loginBody.email}).lean().exec()];
    if (people.length === 1) {
      const findPerson = people[0];
      if (await comparePass(loginBody.password, findPerson.password)) {
        const token = generateToken({email: loginBody.email, phone: findPerson.phone});
        return {
          success: true,
          message: successfulAuthorization,
          token,
          findPerson: _.omit(findPerson, ['password'])
        }
      } else {
        throw new CustomError(notCorrectPass);
      }
    } else {
      throw new CustomError(notCorrectLogin);
    }
  }

};