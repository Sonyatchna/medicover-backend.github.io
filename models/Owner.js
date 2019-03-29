const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let OwnerSchema = new Schema({
  nameOfRestaurant: String,
  addresses: [{
    type: String
  }],
  phone: {type: String, required: true},
  email: {type: String, unique: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('owner', OwnerSchema);