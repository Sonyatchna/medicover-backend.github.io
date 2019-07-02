const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MedicalStaffSchema = new Schema({
  firstName: String,
  secondName: String,
  email: {type: String, unique: true},
  phone: {type: String, required: true},
  position: {type: String},
  password: {type: String, required: true},
  type: String,
});

MedicalStaffSchema.pre('save', function(next) {
  this.type = 'medicalStaff';
  next();
});

module.exports = mongoose.model('medicalStaff', MedicalStaffSchema);