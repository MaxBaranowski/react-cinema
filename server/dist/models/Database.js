"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DB2 = _interopRequireDefault(require("./DB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Database =
/*#__PURE__*/
function (_DB) {
  _inherits(Database, _DB);

  function Database(props) {
    var _this;

    _classCallCheck(this, Database);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Database).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getOne",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var schema, condition, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                schema = _ref.schema, condition = _ref.condition;
                _context.prev = 1;
                _context.next = 4;
                return _this.connect().then(function () {
                  return schema.findOne(_defineProperty({}, condition.key, condition.value)).exec() //will return a promise if no callback is provided.
                  .then(function (data) {
                    return data;
                  }).catch(function (err) {
                    throw new Error(err);
                  });
                });

              case 4:
                result = _context.sent;

                _this.disconnect();

                return _context.abrupt("return", result);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                throw new Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getSome",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref3) {
        var schema, condition, limit, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                schema = _ref3.schema, condition = _ref3.condition, limit = _ref3.limit;
                _context2.prev = 1;
                _context2.next = 4;
                return _this.connect().then(function () {
                  return schema.find().where(_defineProperty({}, condition.key, {
                    $regex: "(?i).*" + condition.value + ".*" // case insensitive + search inside world

                  })).limit(limit).exec().then(function (data) {
                    return data;
                  }).catch(function (err) {
                    throw new Error(err);
                  });
                });

              case 4:
                result = _context2.sent;

                _this.disconnect();

                return _context2.abrupt("return", result);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                throw new Error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getMany",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_ref5) {
        var schema, limit, sortBy, order, skip, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                schema = _ref5.schema, limit = _ref5.limit, sortBy = _ref5.sortBy, order = _ref5.order, skip = _ref5.skip;
                _context3.prev = 1;
                _context3.next = 4;
                return _this.connect().then(function () {
                  return schema.find().sort(_defineProperty({}, sortBy, order)).skip(limit * skip).limit(limit).exec().then(function (data) {
                    return data;
                  }).catch(function (err) {
                    throw new Error(err);
                  });
                });

              case 4:
                result = _context3.sent;

                _this.disconnect();

                return _context3.abrupt("return", result);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                throw new Error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "remove",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref7) {
        var schema, condition, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                schema = _ref7.schema, condition = _ref7.condition;
                _context4.prev = 1;
                _context4.next = 4;
                return _this.connect().then(function () {
                  return schema.findOneAndDelete(_defineProperty({}, condition.key, condition.value)).exec().then(function (data) {
                    return data;
                  }).catch(function (err) {
                    throw new Error(err);
                  });
                });

              case 4:
                result = _context4.sent;

                _this.disconnect();

                return _context4.abrupt("return", result);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                throw new Error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 9]]);
      }));

      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }());

    return _this;
  } // fillCollectionMovies = async ({ schema, data }) => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       this.connect().then(() => {
  //         schema
  //           .create(data)
  //           .then(data => {
  //             resolve(data);
  //           })
  //           .catch(err => {
  //             reject(err);
  //           });
  //       });
  //     });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
  // fillCollectionTrailers = async ({ schema, data, movieID }) => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       this.connect()
  //         .then(() => {
  //           schema
  //             .findOne({ imdbID: movieID })
  //             .exec()
  //             .then(movie => {
  //               movie.Trailers = data;
  //               movie.save(function(err) {
  //                 if (err) {
  //                   reject(err);
  //                 }
  //                 resolve();
  //               });
  //             })
  //             .catch(err => {
  //               reject(err);
  //             })
  //             .finally
  //             // () => this.disconnect()
  //             ();
  //         })
  //         .catch(err => {
  //           reject(err);
  //         });
  //     });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
  // fillCollectionUnixDate = async ({ schema, movieID }) => {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       this.connect()
  //         .then(() => {
  //           schema
  //             .find()
  //             .limit(0)
  //             .exec()
  //             .then(movies => {
  //               movies.forEach(function(movie) {
  //                 let dateUnix = Math.floor(
  //                   new Date(`${movie.Released} GMT`).getTime() / 1000
  //                 ).toString(16);
  //                 movie.ReleasedUnix = dateUnix;
  //                 movie.save(function(err) {
  //                   if (err) {
  //                     reject(err);
  //                   }
  //                   resolve();
  //                 });
  //               });
  //             });
  //         })
  //         .catch(err => {
  //           reject(err);
  //         });
  //     });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };


  return Database;
}(_DB2.default);

exports.default = Database;