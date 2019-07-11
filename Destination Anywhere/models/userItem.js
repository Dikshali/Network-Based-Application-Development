class UserItem {
  constructor(itemCode, itemShortName, categoryName, rating, visitedFlag) {
    this.itemCode = itemCode;
    this.itemShortName = itemShortName;
    this.categoryName = categoryName;
    this.rating = rating;
    this.visitedFlag = visitedFlag;
  }
}

module.exports = UserItem;