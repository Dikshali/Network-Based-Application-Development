var express = require('express');
var app = express();

var getItemDetails = require('./../utility/getItemDetails.js');
var userProfileDB = require('./../utility/userProfileDB.js');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
//session check
var userItemDetails = {};
var sessionUser = {};
var item = {};

app.use(function sessionCheck(req, res, next) {
  if (req.session.theUser) {
    userItemDetails = req.session.userProfile;
    sessionUser = req.session.theUser;
  } else {
    userItemDetails = {};
    sessionUser = {};
  }
  next();
});


app.get('/', function(req, res) {
  var itemLs = getItemDetails.getItems();
  res.render('categories', {
    query: itemLs,
    sessionUser: sessionUser
  });
});

app.get('/item', function(req, res) {
  if (Object.keys(req.query).length == 0) {
    res.render('404');
  } else {
    var code = req.query.itemCode;
    item = getItemDetails.getItem(code);
    var userItem = {};
    if (JSON.stringify(userItemDetails) != JSON.stringify({})) {
      for (var i = 0; i < userItemDetails.itemList.length; i++) {
        if (userItemDetails.itemList[i].itemCode == code) {
          userItem = userItemDetails.itemList[i];
        }
      }
    }
    if (item == null || Object.keys(item).length === 0) {
      res.render('404');
    } else {
      res.render('item', {
        query: item,
        sessionUser: sessionUser,
        userItem: userItem,
        userItemDetails: userItemDetails
      });
    }
  }
});

module.exports = app;
module.exports.item = item;