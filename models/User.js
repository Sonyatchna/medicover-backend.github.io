const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: {type: String, required: true},
  email: {type: String, unique: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('user', UserSchema);