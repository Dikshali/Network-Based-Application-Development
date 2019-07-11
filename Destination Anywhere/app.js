var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({
  secret: 'application',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 30 * 60
  }
}));

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var getItemDetails = require('./utility/getItemDetails');
var userProfileDB = require('./utility/userProfileDB.js');
var catalogRoute = require('./routes/catalog.js');
var profileController = require('./routes/profileController.js');

var userItemDetails = {};
var sessionUser = {};

app.use(function sessionCheck(req, res, next) {
  if (req.session.theUser) {
    userItemDetails = req.session.userProfile;
    sessionUser = req.session.theUser;
  }
  next();
});
app.get('/signOut', function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
      req.session = null;
      sessionUser = {};
      userItemDetails = {};
      res.redirect('/');
    }
  });
});

app.use('/viewCatalog', catalogRoute);
app.use('/userProfileController', profileController);

app.get('/', function(req, res) {
  res.render('index', {
    sessionUser: sessionUser
  });
});


app.get('/aboutUS', function(req, res) {
  res.render('aboutUs', {
    sessionUser: sessionUser
  });
});

app.get('/contactUs', function(req, res) {
  res.render('contactUs', {
    sessionUser: sessionUser
  });
});

app.get('/myTrip', function(req, res) {
  if (!req.session.theUser) {
    var userDB = require('./utility/userDB.js');
    user = userDB.getUser(1);
    req.session.theUser = user;
    req.session.userProfile = userProfileDB.getUserProfile(req.session.theUser.userId);
  }
  userItemDetails = req.session.userProfile;
  sessionUser = req.session.theUser;
  res.render('myTrips', {
    sessionUser: sessionUser,
    userItemDetails: userItemDetails,
    items: userItemDetails.itemList
  });
});

app.get('/*', function(req, res) {
  res.render('404');
});

app.listen(8080, function() {});

module.exports = app;