var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var userUtility = require('./../utility/userUtility.js');

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

app.post('/', urlencodedParser, async function(req, res) {
  if (JSON.stringify(sessionUser) != JSON.stringify({})) {
    if (userItemDetails.itemList.length <= 1) {
      if (req.query.action == "save") {
        await userUtility.addUserItem(req.session.theUser.userId, parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true"));
        req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
        res.redirect('/myTrip');
      } else if (req.query.action == "updateRating") {
        await userUtility.updateRating(req.session.theUser.userId, parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true"));
        req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
        res.redirect('/myTrip');
      } else if (req.query.action == "updateVisit") {
        await userUtility.updateVisitFlag(req.session.theUser.userId, parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true"));
        req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
        res.redirect('/myTrip');
      } else if (req.query.action == "deleteItem") {
        await userUtility.deletItem(req.session.theUser.userId, parseInt(req.body.itemCode));
        req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
        res.redirect('/myTrip');
      }
    } else if (req.body.userItemList.length == userItemDetails.itemList.length) {
      var count = 0;
      for (var i = 0; i < req.body.userItemList.length; i++) {
        for (var j = 0; j < userItemDetails.itemList.length; j++) {
          if (req.body.userItemList[i] == userItemDetails.itemList[j].itemCode) {
            count = count + 1;
          }
        }
      }
      console.log("data 2 count " + count);
      if (count == userItemDetails.itemList.length) {
        if (req.query.action == "save") {
          await userUtility.addUserItem(req.session.theUser.userId, parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true"));
          req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
          //console.log("data 1" + JSON.stringify(req.session.userProfile));
          res.redirect('/myTrip');
        } else if (req.query.action == "updateRating") {
          await userUtility.updateRating(req.session.theUser.userId, parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true"));
          req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
          res.redirect('/myTrip');
        } else if (req.query.action == "updateVisit") {
          await userUtility.updateVisitFlag(req.session.theUser.userId, parseInt(req.body.itemCode), req.body.itemName, req.body.categoryName, parseInt(req.body.rating), (req.body.visitedFlag == "true"));
          req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
          res.redirect('/myTrip');
        } else if (req.query.action == "deleteItem") {
          await userUtility.deletItem(req.session.theUser.userId, parseInt(req.body.itemCode));
          req.session.userProfile = await userUtility.getUserProfile(req.session.theUser.userId);
          res.redirect('/myTrip');
        }

      } else {
        console.log("Not a Authorized Request");
        res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
      }
    } else {
      console.log("Not a Authorized Request");
      res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
    }
  } else {
    console.log("Please Sign in!!");
    res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
  }

});


module.exports = app;