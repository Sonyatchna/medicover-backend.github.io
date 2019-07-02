const authorizationRepository = require("../repository/ClientRepository");
const { registerClient } = authorizationRepository;
const { handleOk } = require("../helpers/dbHelper");

module.exports = {

  registerClient(req, res){
    handleOk(res, registerClient(req.body))
  }

};