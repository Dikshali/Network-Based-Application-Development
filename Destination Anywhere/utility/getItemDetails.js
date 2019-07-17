var ItemSchema = require('../models/itemSchema');
var CategorySchema = require('../models/categorySchema');

var getCatalog = function() {
  return new Promise((resolve, reject) => {
    CategorySchema.find({}).then(data => {
      resolve(data);
    }).catch(err => {
      return reject(err);
    })
  });
}

var getItem = function(itemCode) {
  return new Promise((resolve, reject) => {
    ItemSchema.find({
      itemCode: itemCode
    }).then(data => {
      resolve(data);
    }).catch(err => {
      return reject(err);
    })
  });
};

module.exports = {
  getCatalog: getCatalog,
  getItem: getItem
};