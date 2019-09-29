"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = _mongoose["default"].Schema({
  username: String,
  password: String
}, {
  collection: "users"
});

userSchema.plugin(_passportLocalMongoose["default"]);

var Account = _mongoose["default"].model("Account", userSchema);

exports.Account = Account;