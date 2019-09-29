"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = _interopRequireDefault(require("passport-google-oauth20"));

var _user = require("./models/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// serializeUser determines which data of the user object should be stored in the session.
// The result of the serializeUser method is attached to the session as req.session.passport.user = {}
_passport["default"].serializeUser(function (user, done) {
  console.log(1, user);
  done(null, user._id); //user id  is saved in the session
}); // get the whole object from sseesion by id


_passport["default"].deserializeUser(function (id, done) {
  console.log(2, id);

  _user.User.findById(id).then(function (user) {
    console.log(3, user);
    done(null, user); // object is attached to the request object as req.user
  });
});

_passport["default"].use(new _passportGoogleOauth["default"]({
  // options
  clientID: "158973815180-e5d8ffba8cbq7mld63iodlh2mpi1tdki.apps.googleusercontent.com",
  clientSecret: "K62MAbbhYPd_Rr4l747O0m11",
  callbackURL: "/api/auth/redirect"
}, function (accesToken, refreshToken, profile, done) {
  // check for user existing
  _user.User.findOne({
    id: profile.id
  }).then(function (user) {
    if (user) {
      done(null, user); //create new user
    } else {
      new _user.User({
        username: profile.displayName,
        type: "Google",
        id: profile.id
      }).save().then(function (user) {
        return done(null, user);
      });
    }
  });
}));