var mongoose = require('mongoose');
var UserItemProfileSchema = new mongoose.Schema({
  userId: {
    type: Number,
    trim: true
  },
  itemCode: {
    type: Number,
    trim: true
  },
  itemShortName: {
    type: String,
    trim: true
  },
  categoryName: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  visitedFlag: {
    type: Boolean,
    trim: true
  }
});
module.exports = mongoose.model('useritemprofiles', UserItemProfileSchema);