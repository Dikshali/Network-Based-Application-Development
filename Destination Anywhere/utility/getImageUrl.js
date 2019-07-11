var getImageURL = function(itemCode) {
  var image_list = [];
  for (var i = 1; i <= 3; i++) {
    image_list.push("./../assets/images/" + itemCode + "/" + i + ".jpg");
  }
  return image_list;
};

module.exports.getImageURL = getImageURL;