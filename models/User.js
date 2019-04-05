const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: {type: String, required: true},
  email: {type: String, unique: true},
  password: {type: String, required: true}
});

UserSchema.pre('save', function(next) {
  this.type = 'user';
  next();
});

module.exports = mongoose.model('user', UserSchema);