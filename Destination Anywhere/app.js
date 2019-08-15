var express = require('express');
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var expressValidator = require('express-validator');
app.use(expressValidator());
const expressSanitizer = require('express-sanitizer');

mongoose.connect('mongodb://localhost/DestinationAnywhereDB', {
  useNewUrlParser: true
});

app.use(session({
  secret: 'application',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 30 * 60
  }
}));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var getItemDetails = require('./utility/getItemDetails');
var userUtility = require('./utility/userUtility.js');

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

app.get('/signIn', function(req, res) {
  res.render('index', {
    pageName: "login",
    sessionUser: {},
    userItemDetails: {},
    errorMsg: {}
  });
});

app.get('/myTrip', async function(req, res) {
  if (!req.session.theUser) {
    res.redirect('/signIn');
  } else {
    userItemDetails = await userUtility.getUserProfile(req.session.theUser.userId);
    //console.log("sanitize " + req.sanitize("<script> hello </script> world"));
    //userItemDetails = req.sanitize(userItemDetails);

    req.session.userProfile = userItemDetails;
    sessionUser = req.session.theUser;
    res.render('index', {
      pageName: "myTrips",
      sessionUser: sessionUser,
      userItemDetails: userItemDetails,
      items: userItemDetails.itemList
    });
  }
});

db.on('connected', function() {
  console.log("DB connection is open");
});

app.use('/viewCatalog', catalogRoute);
app.use('/userProfileController', profileController);

app.get('/', function(req, res) {
  res.render('index', {
    pageName: "home",
    sessionUser: sessionUser
  });
});


app.get('/aboutUS', function(req, res) {
  res.render('index', {
    pageName: "aboutUs",
    sessionUser: sessionUser
  });
});

app.get('/contactUs', function(req, res) {
  res.render('index', {
    pageName: "contactUs",
    sessionUser: sessionUser
  });
});

app.post('/authUser', urlencodedParser, async function(req, res) {
  req.check('username').not().isEmpty().trim().isLength({
    min: 3
  }).withMessage('Username must be at least 3 chars long');
  req.checkBody('password').not().isEmpty().trim()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%&])[0-9a-zA-Z!@#%&]{6,}$/).withMessage('Password must contain a number, a special character (allowed special characters are @!#%&),a lower case and uppercase letter. Password must be at least 6 chars long.')
  var errors = req.validationErrors();
  //console.log("Error " + req.body.password + " " + JSON.stringify(errors));
  if (errors) {
    res.render('index', {
      pageName: "login",
      sessionUser: {},
      userItemDetails: {},
      errorMsg: errors
    });
  } else {
    var user = await userUtility.getUser(req.body.username, req.body.password);
    //console.log("user " + user);
    if (user) {
      var userItemDetails = await userUtility.getUserProfile(user.userId);
      req.session.theUser = user;
      req.session.userProfile = userItemDetails;
      res.redirect('/myTrip');
    } else {
      var errors = [{
        msg: "Username or Password does not match."
      }];
      res.render('index', {
        pageName: "login",
        sessionUser: {},
        userItemDetails: {},
        errorMsg: errors
      });
    }


  }
});

app.get('/*', function(req, res) {
  res.render('404', {
    errors: {}
  });
});

app.listen(8080, function() {});

module.exports = app;