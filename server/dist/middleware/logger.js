"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // logger


router.use((0, _morgan.default)('common', {
  stream: _fs.default.createWriteStream('./access.log', {
    flags: 'a'
  })
}));
router.use((0, _morgan.default)('dev'));
var _default = router;
exports.default = _default;