"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Database = _interopRequireDefault(require("../../models/Database"));

var _moviePoster = _interopRequireDefault(require("../../models/moviePoster"));

var _movieFull = require("./models/movieFull");

var _movieShort = require("./models/movieShort");

var _api_db_creted_methods = require("./api_db_creted_methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var API = function API() {
  _classCallCheck(this, API);

  _defineProperty(this, "getMovie",
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res, next) {
      var _ref2, _ref2$id, movieId;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _ref2 = Object.keys(req.body).length > 0 ? req.body : req.params, _ref2$id = _ref2.id, movieId = _ref2$id === void 0 ? "" : _ref2$id;
              _context.next = 4;
              return new _Database.default().getOne({
                schema: _movieFull.MovieFull,
                condition: {
                  key: "imdbID",
                  value: movieId
                }
              }).then(function (result) {
                result ? res.status(200).json(result) : res.status(200).json({});
              }).catch(function (err) {
                return next(err);
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", next(_context.t0));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getMoviesByName",
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res, next) {
      var _ref4, _ref4$name, name, _ref4$key, key, _ref4$limit, limit;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _ref4 = Object.keys(req.body).length > 0 ? req.body : req.params, _ref4$name = _ref4.name, name = _ref4$name === void 0 ? "" : _ref4$name, _ref4$key = _ref4.key, key = _ref4$key === void 0 ? "Title" : _ref4$key, _ref4$limit = _ref4.limit, limit = _ref4$limit === void 0 ? 5 : _ref4$limit;
              _context2.next = 4;
              return new _Database.default().getSome({
                schema: _movieShort.MovieShort,
                condition: {
                  key: key,
                  value: name
                },
                limit: parseInt(limit)
              }).then(function (result) {
                result ? res.status(200).json(result) : res.status(200).json({});
              }).catch(function (err) {
                return next(err);
              });

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", next(_context2.t0));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getMovies",
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res, next) {
      var _ref6, _ref6$limit, limit, _ref6$sortBy, sortBy, _ref6$order, order, _ref6$skip, skip;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _ref6 = Object.keys(req.body).length > 0 ? req.body : req.query, _ref6$limit = _ref6.limit, limit = _ref6$limit === void 0 ? 50 : _ref6$limit, _ref6$sortBy = _ref6.sortBy, sortBy = _ref6$sortBy === void 0 ? "ReleasedUnix" : _ref6$sortBy, _ref6$order = _ref6.order, order = _ref6$order === void 0 ? order === "asc" ? 0 : -1 : _ref6$order, _ref6$skip = _ref6.skip, skip = _ref6$skip === void 0 ? 0 : _ref6$skip;
              _context3.next = 4;
              return new _Database.default().getMany({
                schema: _movieShort.MovieShort,
                limit: parseInt(limit),
                sortBy: sortBy,
                order: order,
                skip: skip
              }).then(function (result) {
                result ? res.status(200).json(result) : res.status(200).json({});
              }).catch(function (err) {
                return next(err);
              });

            case 4:
              _context3.next = 9;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", next(_context3.t0));

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }());

  _defineProperty(this, "removeMovie",
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(req, res, next) {
      var _ref8, _ref8$key, key, _ref8$id, id;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _ref8 = Object.keys(req.body).length > 0 ? req.body : req.params, _ref8$key = _ref8.key, key = _ref8$key === void 0 ? "imdbID" : _ref8$key, _ref8$id = _ref8.id, id = _ref8$id === void 0 ? false : _ref8$id;
              _context4.t0 = new _Database.default().remove({
                schema: _movieFull.MovieFull,
                condition: {
                  key: key,
                  value: id
                }
              });
              _context4.next = 5;
              return new _Database.default().remove({
                schema: _movieShort.MovieShort,
                condition: {
                  key: key,
                  value: id
                }
              });

            case 5:
              _context4.t1 = _context4.sent;

              _context4.t2 = function (result) {
                res.status(200).json({
                  result: "Movie successfully deleted."
                });
              };

              _context4.t3 = function (err) {
                return next(err);
              };

              _context4.next = 10;
              return _context4.t0.then.call(_context4.t0, _context4.t1).then(_context4.t2).catch(_context4.t3);

            case 10:
              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t4 = _context4["catch"](0);
              return _context4.abrupt("return", next(_context4.t4));

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getMoviePoster",
  /*#__PURE__*/
  function () {
    var _ref9 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(req, res, next) {
      var _ref10, id;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _ref10 = Object.keys(req.body).length > 0 ? req.body : req.params, id = _ref10.id;
              _context5.next = 4;
              return new _moviePoster.default({
                id: id
              }).get().then(function (result) {
                res.json(result);
              }).catch(function (err) {
                res.status(200).json([]); // there is no such movie
                // throw new Error(err);
              });

            case 4:
              _context5.next = 9;
              break;

            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              next(_context5.t0);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 6]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref9.apply(this, arguments);
    };
  }());

  _defineProperty(this, "index", function (req, res, next) {
    res.status(200).render("api");
  });

  _defineProperty(this, "fillDataBaseWithMovies",
  /*#__PURE__*/
  function () {
    var _ref11 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(req, res, next) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              (0, _api_db_creted_methods.makeMovies)(req, res, next).then(function (result) {
                return result;
              }).catch(function (err) {
                throw new Error(err);
              });
              _context6.next = 7;
              break;

            case 4:
              _context6.prev = 4;
              _context6.t0 = _context6["catch"](0);
              throw new Error(_context6.t0);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 4]]);
    }));

    return function (_x16, _x17, _x18) {
      return _ref11.apply(this, arguments);
    };
  }());

  _defineProperty(this, "fillMoviesWithTrailers",
  /*#__PURE__*/
  function () {
    var _ref12 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(req, res, next) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              (0, _api_db_creted_methods.makeTrailers)(req, res, next).then(function (result) {
                return result;
              }).catch(function (err) {
                throw new Error(err);
              });
              _context7.next = 7;
              break;

            case 4:
              _context7.prev = 4;
              _context7.t0 = _context7["catch"](0);
              throw new Error(_context7.t0);

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 4]]);
    }));

    return function (_x19, _x20, _x21) {
      return _ref12.apply(this, arguments);
    };
  }());

  _defineProperty(this, "fillMoviesWithUnixDate",
  /*#__PURE__*/
  function () {
    var _ref13 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8(req, res, next) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              (0, _api_db_creted_methods.makeUnixDate)(req, res, next).then(function (result) {
                return result;
              }).catch(function (err) {
                throw new Error(err);
              });
              _context8.next = 7;
              break;

            case 4:
              _context8.prev = 4;
              _context8.t0 = _context8["catch"](0);
              throw new Error(_context8.t0);

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 4]]);
    }));

    return function (_x22, _x23, _x24) {
      return _ref13.apply(this, arguments);
    };
  }());
};

exports.default = API;