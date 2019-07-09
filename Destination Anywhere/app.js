var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var getItemDetails = require('./models/getItemDetails');

var catalogRoute = require('./routes/catalog.js');
app.use('/viewCatalog', catalogRoute);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/aboutUS', function(req, res) {
  res.render('aboutUs');
});

app.get('/contactUs', function(req, res) {
  res.render('contactUs');
});

app.get('/myTrip', function(req, res) {
  var item1 = getItemDetails.getItem(2003);
  var item2 = getItemDetails.getItem(3002);
  var item3 = getItemDetails.getItem(4001);
  res.render('myTrips', {
    query1: item1,
    query2: item2,
    query3: item3,
  });
});

app.get('/*', function(req, res) {
  res.render('404');
});

app.listen(8080, function() {
  console.log('app started');
  console.log('listening on port 8080');
});