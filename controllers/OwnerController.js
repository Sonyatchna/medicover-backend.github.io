const authorizationRepository = require("../repository/UserRepository");
const { login, register } = authorizationRepository;
const { handleOk } = require("../helpers/dbHelper");

module.exports = {

  login(req, res){
    handleOk(res, login(req.body))
  },

  register(req, res){
    handleOk(res, register(req.body))
  }

};