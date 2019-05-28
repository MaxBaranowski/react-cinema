"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _logger = _interopRequireDefault(require("../middleware/logger"));

var _index = _interopRequireDefault(require("./public/home/index"));

var _index2 = _interopRequireDefault(require("./api/index"));

var _Page = _interopRequireDefault(require("./Page404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use(_express.default.urlencoded({
  extended: false,
  limit: "100kb",
  parameterLimit: 10
}));
router.use("/", _index.default);
router.use("/api", _index2.default);
router.use(_Page.default); // error logger will be hear

router.use(function (err, req, res, next) {
  console.error("Log: ", err.message);
  next(err);
});
router.use(_logger.default);
router.use(function (err, req, res, next) {
  if (process.env.NODE_ENV === "development") {
    next((0, _httpErrors.default)(500, err));
  } else {
    res.status(500);
    res.json({
      error: err.message
    });
  }
}); // development error showing

router.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === "development" ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render("error"); // process.exit(0)
});
var _default = router;
exports.default = _default;