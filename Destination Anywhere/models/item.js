var imageUrl = require('../utility/getImageUrl');

class Item {
  constructor(itemCode, itemName, itemShortName, catalogCatagoryName, description, rating, totalPeopleRated) {
    this.itemCode = itemCode;
    this.itemName = itemName;
    this.itemShortName = itemShortName;
    this.catalogCatagoryName = catalogCatagoryName;
    this.description = description.desc;
    this.duration = description.duration;
    this.cost = description.cost;
    this.rating = rating;
    this.imageUrlList = imageUrl.getImageURL(itemCode);
    this.totalPeopleRated = totalPeopleRated;
  }
}

module.exports = Item;