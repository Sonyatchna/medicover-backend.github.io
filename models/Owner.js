const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OwnerSchema = new Schema({
  nameOfRestaurant: String,
  addresses: [{
    type: String
  }],
  phone: {type: String, required: true},
  email: {type: String, unique: true},
  password: {type: String, required: true},
  type: String,
});

OwnerSchema.pre('save', function(next) {
  this.type = 'owner';
  next();
});

module.exports = mongoose.model('owner', OwnerSchema);