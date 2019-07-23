var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    trim: true
  },
  first_name: {
    type: String,
    trim: true
  },
  last_name: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  address: {
    street: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    zip: {
      type: Number,
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
    user_name: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      trim: true
    }
  }
});
module.exports = mongoose.model('users', UserSchema);