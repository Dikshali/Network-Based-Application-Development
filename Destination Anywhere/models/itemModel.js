class ItemModel {
  constructor(itemCode, itemName, itemShortName, categoryId, catalogCatagoryName, description, duration, cost, rating, totalPeopleRated, imageUrl) {
    this.itemCode = itemCode;
    this.itemName = itemName;
    this.itemShortName = itemShortName;
    this.categoryId = categoryId;
    this.catalogCatagoryName = catalogCatagoryName;
    this.description = description;
    this.duration = duration;
    this.cost = cost;
    this.rating = rating;
    this.imageUrlList = imageUrl;
    this.totalPeopleRated = totalPeopleRated;
  }
}

module.exports = ItemModel;