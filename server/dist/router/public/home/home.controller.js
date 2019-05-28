"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Home = function Home() {
  _classCallCheck(this, Home);

  _defineProperty(this, "show", function (req, res, next) {
    res.render("home");
  });

  this.text = "hello fro Home class controller";
};

exports.default = Home;