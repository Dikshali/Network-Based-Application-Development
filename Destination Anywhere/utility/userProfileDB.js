var userProfile = require('../models/userProfile.js');
var userItem = require('../models/userItem.js');
var itemDetails = require('./getItemDetails.js');

//****************** DB ******************
var savedItemList = [];
var u_item1 = new userItem(2001, 'Burj Khalifa', 'Dubai', 4, true);
var u_item2 = new userItem(3003, 'River Seine Sightseeing Cruise', 'France', 1, false);
savedItemList.push(u_item1);
savedItemList.push(u_item2);
var userProfileDetails = new userProfile(1, savedItemList);

var getUserProfile = function(userId) {
  if (userProfileDetails.userId === userId) {
    return userProfileDetails;
  } else {
    console.log("User Not present");
    //alert
  }
};

module.exports = {
  getUserProfile: getUserProfile
};