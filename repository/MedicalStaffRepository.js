const MedicalStaff = require('../models/MedicalStaff');
const CustomError = require('../errors/CustomError');
const { userExists } = require('../constants/errorMessageConstants');
const { successfulRegistration } = require('../constants/successMessageConstants');
const hashPass = require('../helpers/cryptoHelper');

module.exports = class AuthorizationRepository {

  static async registerMedicalStaff(medicalStaffBody) {
    const medicalWorkers = await MedicalStaff.find({email: medicalStaffBody.email});
    if (medicalWorkers.length > 0) throw new CustomError(userExists);
    await hashPass(medicalStaffBody);
    const medicalStaff = new MedicalStaff(medicalStaffBody);
    await medicalStaff.save();
    return {
      message: successfulRegistration,
      medicalStaff
    }
  }

};