var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

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

app.post('/', urlencodedParser, function(req, res) {
  if (JSON.stringify(sessionUser) != JSON.stringify({})) {
    console.log("data " + JSON.stringify(req.body));
    if (userItemDetails.itemList.length <= 1) {
      if (req.query.action == "deleteItem") {
        for (var i = 0; i < userItemDetails.itemList.length; i++) {
          if (userItemDetails.itemList[i].itemCode == parseInt(req.body.itemCode)) {
            userItemDetails.itemList.splice(i, 1);;
          }
        }
      } else if (req.query.action == "save") {
        var userItem = require('./../models/userItem.js');
        userItemDetails.itemList.push(new userItem(parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visited == "true")));
      } else if (req.query.action == "updateRating") {
        var updateFlag = false;
        for (var k = 0; k < userItemDetails.itemList.length; k++) {
          if (userItemDetails.itemList[k].itemCode == parseInt(req.body.itemCode)) {
            userItemDetails.itemList[k].rating = parseInt(req.body.rating);
            updateFlag = true;
          }
        }
        if (!updateFlag) {
          var userItem = require('./../models/userItem.js');
          userItemDetails.itemList.push(new userItem(parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visited == "true")));
        }
      } else if (req.query.action == "updateVisit") {
        var updateFlag = false;
        for (var k = 0; k < userItemDetails.itemList.length; k++) {
          if (userItemDetails.itemList[k].itemCode == parseInt(req.body.itemCode)) {
            updateFlag = true;
            if (req.body.visitedFlag == "true") {
              userItemDetails.itemList[k].visitedFlag = true;
            } else {
              userItemDetails.itemList[k].visitedFlag = false;
            }
          }
        }
        if (!updateFlag) {
          var userItem = require('./../models/userItem.js');
          userItemDetails.itemList.push(new userItem(parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true")));
        }
      }
      req.session.userProfile = userItemDetails;
      res.redirect('/myTrip');
    } else if (req.body.userItemList.length == userItemDetails.itemList.length) {
      var count = 0;
      for (var i = 0; i < req.body.userItemList.length; i++) {
        for (var j = 0; j < userItemDetails.itemList.length; j++) {
          if (req.body.userItemList[i] == userItemDetails.itemList[j].itemCode) {
            count = count + 1;
          }
        }
      }
      if (count == userItemDetails.itemList.length) {
        //success
        if (req.query.action == "save") {
          var userItem = require('./../models/userItem.js');
          userItemDetails.itemList.push(new userItem(parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visited == "true")));
        } else if (req.query.action == "updateRating") {
          var updateFlag = false;
          for (var k = 0; k < userItemDetails.itemList.length; k++) {
            if (userItemDetails.itemList[k].itemCode == parseInt(req.body.itemCode)) {
              userItemDetails.itemList[k].rating = parseInt(req.body.rating);
              updateFlag = true;
            }
          }
          if (!updateFlag) {
            var userItem = require('./../models/userItem.js');
            userItemDetails.itemList.push(new userItem(parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visited == "true")));
          }
        } else if (req.query.action == "updateVisit") {
          var updateFlag = false;
          for (var k = 0; k < userItemDetails.itemList.length; k++) {
            if (userItemDetails.itemList[k].itemCode == parseInt(req.body.itemCode)) {
              updateFlag = true;
              if (req.body.visitedFlag == "true") {
                userItemDetails.itemList[k].visitedFlag = true;
              } else {
                userItemDetails.itemList[k].visitedFlag = false;
              }
            }
          }
          if (!updateFlag) {
            var userItem = require('./../models/userItem.js');
            userItemDetails.itemList.push(new userItem(parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true")));
          }
        } else if (req.query.action == "deleteItem") {
          for (var i = 0; i < userItemDetails.itemList.length; i++) {
            if (userItemDetails.itemList[i].itemCode == parseInt(req.body.itemCode)) {
              userItemDetails.itemList.splice(i, 1);
            }
          }
        }
        req.session.userProfile = userItemDetails;
        res.redirect('/myTrip');
      } else {
        console.log("Not a Authorized Request");
        res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
        //not a proper request
      }
    } else {
      console.log("Not a Authorized Request");
      res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
      //not a proper request

    }
  } else {
    console.log("Please Sign in!!");
    res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
  }
});


module.exports = app;