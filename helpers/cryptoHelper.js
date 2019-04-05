const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPass (personBody){
  return new Promise((resolve, reject) => {
    bcrypt.hash(personBody.password, saltRounds, (err, hash) => {
      if(err) {
        reject(err.message);
      }
      personBody.password = hash;
      resolve();
    })
  })
}

module.exports = hashPass;