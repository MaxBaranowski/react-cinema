"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose.default.Schema({
  username: {
    type: String
  },
  type: {
    type: String
  },
  id: {
    type: String,
    unique: true
  }
}, {
  collection: "users"
});

var User = _mongoose.default.model("User", userSchema);

exports.User = User;