var UserItem = require('../models/userItem.js');

class UserProfile {

  constructor(userId, itemList) {
    var useritemList = [];
    this.userId = userId;
    for (var i = 0; i < itemList.length; i++) {
      useritemList.push(new UserItem(itemList[i].itemCode, itemList[i].itemShortName, itemList[i].categoryName, itemList[i].rating, itemList[i].visitedFlag))
    }

    this.itemList = useritemList;
  }
}
module.exports = UserProfile;