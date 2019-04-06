const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: {type: String, required: true},
  email: {type: String, unique: true},
  password: {type: String, required: true},
  type: String,
});

userSchema.pre('save', function(next) {
  this.type = 'user';
  next();
});

module.exports = mongoose.model('user', userSchema);