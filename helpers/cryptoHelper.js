const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPass (pass) {
  bcrypt.hash(pass, saltRounds).then(function(hash) {

  });
}

module.exports = hashPass;