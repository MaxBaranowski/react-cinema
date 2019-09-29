"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _ignoreFavIcon = _interopRequireDefault(require("./middleware/ignoreFavIcon"));

var _nodeSassMiddleware = _interopRequireDefault(require("node-sass-middleware"));

var _cors = _interopRequireDefault(require("cors"));

var _passport = _interopRequireDefault(require("passport"));

require("./oauth/local.strategy");

require("./oauth/google.strategy");

var _session = _interopRequireDefault(require("./middleware/session"));

var _routes = _interopRequireDefault(require("./router/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // hide server info

app.disable("x-powered-by"); //Enable All CORS Requests

app.use((0, _cors["default"])()); // read JSON content-type (body parser built into express)

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); // set up session cookies

app.use((0, _cookieSession["default"])({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ["cookie Secret"]
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session()); // ignore error with favicon 404

app.use(_ignoreFavIcon["default"]); // use scss for styling server pages

app.use((0, _nodeSassMiddleware["default"])({
  src: _path["default"].join(__dirname, "../public"),
  dest: _path["default"].join(__dirname, "../public"),
  indentedSyntax: false,
  // true = .sass and false = .scss
  sourceMap: true
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public"), //root folder
{}));
console.log(__dirname);
app.set("views", _path["default"].join(__dirname, "views")); // view engine setup

app.set("view engine", "hbs"); // eanble hbs as a template engine

app.use(_express["default"].json({
  limit: "1024kb",
  strict: true,
  type: "application/json"
}));
app.use(_session["default"]); // Routes

app.use(_routes["default"]);
var _default = app;
exports["default"] = _default;