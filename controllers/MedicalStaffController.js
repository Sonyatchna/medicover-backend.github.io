const authorizationRepository = require("../repository/MedicalStaffRepository");
const { registerMedicalStaff } = authorizationRepository;
const { handleOk } = require("../helpers/dbHelper");

module.exports = {

  registerMedicalStaff(req, res){
    handleOk(res, registerMedicalStaff(req.body))
  }

};