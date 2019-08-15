var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var getItemDetails = require('./../utility/getItemDetails.js');
var userUtility = require('./../utility/userUtility.js');


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

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


app.get('/', async function(req, res) {
  var categoryList = await getItemDetails.getCatalog();
  res.render('index', {
    pageName: "categories",
    query: categoryList,
    sessionUser: sessionUser
  });
});

app.get('/item', [
  check('itemCode').isNumeric().withMessage('Invalid Itemcode')
], urlencodedParser, async function(req, res) {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    console.log(errors.array()[0].msg);
    //req.session.errorMessage = errors.array();
    res.render('404', {
      errors: errors.array()[0]
    });
  } else {
    if (Object.keys(req.query).length == 0) {
      res.render('404', {
        errors: {}
      });
    } else {
      var code = req.query.itemCode;
      item = await getItemDetails.getItem(code);
      var userItem = {};
      if (JSON.stringify(userItemDetails) != JSON.stringify({})) {
        userItem = await userUtility.getUserItem(req.session.theUser.userId, code);
      }
      if (item == null || Object.keys(item).length === 0) {
        res.render('404', {
          errors: {}
        });
      } else {
        res.render('index', {
          pageName: "item",
          query: item,
          sessionUser: sessionUser,
          userItem: userItem,
          userItemDetails: userItemDetails
        });
      }
    }
  }

});

module.exports = app;
module.exports.item = item;