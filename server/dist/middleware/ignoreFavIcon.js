"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ignoreFavicon = function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({}); // no content
  } else {
    next();
  }
};

var _default = ignoreFavicon;
exports.default = _default;