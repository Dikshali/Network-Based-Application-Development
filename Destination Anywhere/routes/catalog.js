var express = require('express');
var app = express();

var getItemDetails = require('./../utility/getItemDetails.js');
var userUtility = require('./../utility/userUtility.js');


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
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


app.get('/', async function(req, res) {
  var categoryList = await getItemDetails.getCatalog();
  res.render('categories', {
    query: categoryList,
    sessionUser: sessionUser
  });
});

app.get('/item', async function(req, res) {
  if (Object.keys(req.query).length == 0) {
    res.render('404');
  } else {
    var code = req.query.itemCode;
    item = await getItemDetails.getItem(code);
    var userItem = {};
    if (JSON.stringify(userItemDetails) != JSON.stringify({})) {
      userItem = await userUtility.getUserItem(req.session.theUser.userId, code);
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