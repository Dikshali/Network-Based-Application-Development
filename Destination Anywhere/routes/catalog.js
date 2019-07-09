var express = require('express');

var router = express.Router();
var itemInfo = require('./catalog');
var getItemDetails = require('./../models/getItemDetails');

router.get('/', function(req, res) {
  var itemLs = getItemDetails.getItems();
  res.render('categories', {
    query: itemLs
  });
});

router.get('/item', function(req, res) {
  if (Object.keys(req.query).length === 0) {
    res.render('404');
  } else {

    var code = req.query.itemCode;
    var item = getItemDetails.getItem(code);
    if (item == null || Object.keys(item).length === 0) {
      res.render('404');
    } else {
      res.render('item', {
        query: item
      });
    }
  }
});

module.exports = router;