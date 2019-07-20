const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema({
  firstName: String,
  secondName: String,
  email: {type: String, unique: true},
  phone: {type: String, required: true},
  dateOfBirth: {type: String},
  password: {type: String, required: true},
  type: String,
});

clientSchema.pre('save', function(next) {
  this.type = 'client';
  next();
});

module.exports = mongoose.model('client', clientSchema);