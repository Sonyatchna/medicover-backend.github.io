const authorizationRepository = require("../repository/UserRepository");
const { registerUser } = authorizationRepository;
const { handleOk } = require("../helpers/dbHelper");

module.exports = {

  registerUser(req, res){
    handleOk(res, registerUser(req.body))
  }

};