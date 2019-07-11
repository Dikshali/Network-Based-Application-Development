var user = require('../models/user.js');

var userData = [];
var address = [{
  add1: "11012 Graduate Ln",
  city: "Charlotte",
  state: "North Carolina",
  zip: 28262,
  country: "United States"
}]
var user1 = new user(1, "Dikshali", "Margaj", 25, "dmargaj@uncc.edu", address);

userData.push(user1);

module.exports.getUser = function(userId) {
  //console.info("from DB, user id :" + userId);
  for (var i = 0; i < userData.length; i++) {
    //console.log("Data" + JSON.stringify(userData));
    if (parseInt(userData[i].userId) == userId) {
      return userData[i];
    }
  }
}