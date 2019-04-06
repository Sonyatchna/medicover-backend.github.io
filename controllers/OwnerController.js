const authorizationRepository = require("../repository/UserRepository");
const { registerOwner } = authorizationRepository;
const { handleOk } = require("../helpers/dbHelper");

module.exports = {

  registerOwner(req, res){
    handleOk(res, registerOwner(req.body))
  }

};