"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _expressSession.default)({
  genid: function genid(req) {
    return (0, _uuid.default)();
  },
  // use UUIDs for session IDs
  secret: "maksiu",
  resave: false,
  saveUninitialized: true
}));
var _default = app;
exports.default = _default;