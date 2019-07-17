var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  itemCode: {
    type: Number,
    required: true,
    trim: true
  },
  itemName: {
    type: String,
    required: true,
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
  description: {
    type: String,
    trim: true
  },
  duration: {
    type: Number,
    trim: true
  },
  cost: {
    type: Number,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  totalPeopleRated: {
    type: Number,
    trim: true
  },
  imageUrlList: {
    type: [String],
    trim: true
  }
});

module.exports = mongoose.model('items', ItemSchema);