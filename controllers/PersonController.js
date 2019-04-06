const personRepository = require("../repository/PersonRepository");
const { login } = personRepository;
const { handleOk } = require("../helpers/dbHelper");

module.exports = {

  login(req, res){
    handleOk(res, login(req.body))
  }

};