"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _user = require("./models/user.local");

var _Database = _interopRequireDefault(require("../models/Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// serializeUser determines which data of the user object should be stored in the session.
// The result of the serializeUser method is attached to the session as req.session.passport.user = {}
_passport["default"].serializeUser(function (user, done) {
  console.log(11, user);
  done(null, user._id); //user id  is saved in the session
}); // get the whole object from sseesion by id


_passport["default"].deserializeUser(function (id, done) {
  console.log(12, id);

  _user.Account.findById(id).then(function (user) {
    console.log(3, user);
    done(null, user); // object is attached to the request object as req.user
  });
});

_passport["default"].use(new _passportLocal["default"]({
  username: "email",
  password: "user-password"
},
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(username, password, done) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(username);
            console.log(password);
            _context.next = 4;
            return new _Database["default"]().getOne({
              schema: _user.Account,
              condition: {
                key: "username",
                value: username
              }
            }).then(function (user) {
              console.log(20);

              if (!user) {
                console.log(30);
                return done(null, false);
              }

              console.log(40, user);
              done(null, user);
            })["catch"](function (err) {
              return console.log(err);
            });

          case 4:
            console.log(50);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));