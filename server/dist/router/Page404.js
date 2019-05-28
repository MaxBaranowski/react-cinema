"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(req, res, next) {
  if (process.env.NODE_ENV === "development") {
    res.render("404");
  } else {
    res.status(404).json({
      error: "Route: " + req.url + " Not found."
    });
  }
};

exports.default = _default;