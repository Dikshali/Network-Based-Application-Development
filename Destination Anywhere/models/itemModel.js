var imageUrl = require('./getImageUrl');

var itemInfo = function(itemCode, itemName, itemShortName, catalogCatagoryName, description, rating) {
  var itemModel = {
    itemCode: itemCode,
    itemName: itemName,
    itemShortName: itemShortName,
    catalogCatagoryName: catalogCatagoryName,
    description: description.desc,
    duration: description.duration,
    cost: description.cost,
    rating: rating,
    imageUrlList: imageUrl.getImageURL(itemCode)
  };
  return itemModel;
}

module.exports.itemInfo = itemInfo;