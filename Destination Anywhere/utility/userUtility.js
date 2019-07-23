var UserSchema = require('../models/userSchema.js');
var UserItemProfileSchema = require('../models/userItemProfileSchema.js');
var UserProfile = require('../models/userProfile.js');
var User = require('../models/userModel.js');
var UserItem = require('../models/userItem.js');

// var getUserDetails = function(userId) {
//   return new Promise((resolve, reject) => {
//     UserSchema.find({
//       user_id: userId
//     }).then(data => {
//       var user = new User(data[0].user_id, data[0].first_name, data[0].last_name, data[0].age, data[0].email, data[0].address);
//       resolve(user);
//     }).catch(err => {
//       return reject(err);
//     })
//   });
// }

var getUser = function(username, password) {
  return new Promise((resolve, reject) => {
    UserSchema.findOne({
      $and: [{
        user_name: username
      }, {
        password: password
      }]
    }, {
      user_id: 1,
      first_name: 1,
      last_name: 1,
      age: 1,
      email: 1,
      address: 1,
      user_name: 1
    }).then(data => {
      if (data) {
        var user = new User(data.user_id, data.first_name, data.last_name, data.age, data.email, data.address, data.user_name);
        resolve(user);
      } else {
        resolve(data);
      }

    }).catch(err => {
      return reject(err);
    })
  });
}

var getAllUsers = function() {
  return new Promise((resolve, reject) => {
    UserSchema.find({}).then(data => {
      //var user = new User(data[0].user_id, data[0].first_name, data[0].last_name, data[0].age, data[0].email, data[0].address);
      resolve(data);
    }).catch(err => {
      return reject(err);
    })
  });
}


var getUserProfile = function(userId) {
  return new Promise((resolve, reject) => {
    UserItemProfileSchema.find({
      userId: userId
    }, {
      itemCode: 1,
      itemShortName: 1,
      categoryName: 1,
      rating: 1,
      visitedFlag: 1
    }).then(data => {
      //console.log("userProfileDetails " + JSON.stringify(data));
      var userProfileDetails = new UserProfile(userId, data);
      resolve(userProfileDetails);
    }).catch(err => {
      return reject(err);
    })
  });
};

var getUserItem = function(userId, itemCode) {
  return new Promise((resolve, reject) => {
    UserItemProfileSchema.find({
      $and: [{
        userId: userId
      }, {
        itemCode: itemCode
      }]
    }, {
      itemCode: 1,
      itemShortName: 1,
      categoryName: 1,
      rating: 1,
      visitedFlag: 1
    }).then(data => {
      var userItemDetails = {};
      if (data.length != 0) {
        userItemDetails = new UserItem(data[0].itemCode, data[0].itemShortName, data[0].categoryName, data[0].rating, data[0].visitedFlag);
      }
      resolve(userItemDetails);
    }).catch(err => {
      return reject(err);
    })
  });
};

var addUserItem = function(userId, itemCode, itemShortName, categoryName, rating, visitedFlag) {
  var saveItem = new UserItemProfileSchema({
    userId: userId,
    itemCode: itemCode,
    itemShortName: itemShortName,
    categoryName: categoryName,
    rating: rating,
    visitedFlag: visitedFlag
  });
  return new Promise((resolve, reject) => {
    saveItem.save().then(data => {
      if (data) {
        resolve(data);
      }
      resolve(data);
    }).catch(err => {
      return reject(err);
    })
  });
}

var updateRating = function(userId, itemCode, itemShortName, categoryName, rating, visitedFlag) {
  return new Promise((resolve, reject) => {
    UserItemProfileSchema.find({
      $and: [{
        userId: userId
      }, {
        itemCode: itemCode
      }]
    }).then(data => {
      if (data.length > 0) {
        UserItemProfileSchema.update({
          $and: [{
            userId: userId
          }, {
            itemCode: itemCode
          }]
        }, {
          rating: rating
        }).then(data => {
          resolve(data);
        }).catch(err => {
          return reject(err);
        })
      } else {
        addUserItem(userId, itemCode, itemShortName, categoryName, rating, visitedFlag)
        resolve(data);
      }
    }).catch(err => {
      return reject(err);
    })
  });
}

var updateVisitFlag = function(userId, itemCode, itemShortName, categoryName, rating, visitedFlag) {
  return new Promise((resolve, reject) => {
    UserItemProfileSchema.find({
      $and: [{
        userId: userId
      }, {
        itemCode: itemCode
      }]
    }).then(data => {
      if (data.length > 0) {
        UserItemProfileSchema.update({
          $and: [{
            userId: userId
          }, {
            itemCode: itemCode
          }]
        }, {
          visitedFlag: visitedFlag
        }).then(data => {
          resolve(data);
        }).catch(err => {
          return reject(err);
        })
      } else {
        addUserItem(userId, itemCode, itemShortName, categoryName, rating, visitedFlag)
        resolve(data);
      }
    }).catch(err => {
      return reject(err);
    })
  });
}

var deletItem = function(userId, itemCode) {
  return new Promise((resolve, reject) => {
    UserItemProfileSchema.remove({
      $and: [{
        userId: userId
      }, {
        itemCode: itemCode
      }]
    }).then(data => {
      resolve(data);
    }).catch(err => {
      return reject(err);
    })
  });
}

module.exports = {
  getUser: getUser,
  getAllUsers: getAllUsers,
  getUserProfile: getUserProfile,
  getUserItem: getUserItem,
  addUserItem: addUserItem,
  updateRating: updateRating,
  updateVisitFlag: updateVisitFlag,
  deletItem: deletItem
};