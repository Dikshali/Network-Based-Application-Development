var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
  categoryCode: {
    type: Number,
    trim: true
  },
  categoryName: {
    type: String,
    trim: true
  },
  itemList: [{
    itemCode: {
      type: Number,
      required: true,
      trim: true
    },
    itemShortName: {
      type: String,
      trim: true
    }
  }]
});
module.exports = mongoose.model('categorys', CategorySchema);