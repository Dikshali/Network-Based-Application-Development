var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var userUtility = require('./../utility/userUtility.js');

const {
  check,
  validationResult
} = require('express-validator/check')
const {
  sanitizeBody
} = require('express-validator/filter');

const expressSanitizer = require('express-sanitizer');

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

app.post('/', urlencodedParser, [
  check('action').not().isEmpty().escape().withMessage('Invalid Action'),
  check('itemCode').isNumeric().withMessage('Invalid Item Code'),
  check('itemName').not().isEmpty().withMessage('Invalid Item Name'),
  check('categoryName').not().isEmpty().escape().withMessage('Invalid Category Name'),
  check('rating').not().isEmpty().escape().withMessage('Invalid Rating'),
  check('visitedFlag').not().isEmpty().escape().withMessage('Invalid Visited Flag')
], async function(req, res) {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    console.log(errors.array()[0].msg);
    res.render('404', {
      errors: errors.array()[0]
    });
  } else {
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
        //console.log("data 2 count " + count);
        if (count == userItemDetails.itemList.length) {
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

        } else {
          console.log("Not a Authorized Request");
          res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
        }
      } else {
        console.log("Not a Authorized Request");
        res.redirect('/viewCatalog/item?itemCode=' + parseInt(req.body.itemCode));
      }
    } else {
      res.render('index', {
        pageName: "login",
        sessionUser: sessionUser,
        userItemDetails: userItemDetails,
        errorMsg: {}
      });
    }
  }


});


module.exports = app;