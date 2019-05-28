"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUnixDate = exports.makeTrailers = exports.makeMovies = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _axios = _interopRequireDefault(require("axios"));

var _movieFull = require("./models/movieFull.model");

var _MovieShort = require("./models/MovieShort.model");

var _Database = _interopRequireDefault(require("../../models/Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var makeMovies =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", true);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function makeMovies(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.makeMovies = makeMovies;

var makeTrailers =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var promises;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // new Promise((resolve, reject) => {
            promises = [];
            _context3.next = 4;
            return new _Database.default().getMany({
              schema: _MovieShort.MovieShort,
              limit: 0
            }).then(function (data) {
              var amount = data.length;
              var i = 0;
              data.forEach(function (movie) {
                promises.push(new Promise(function (resolve, reject) {
                  i += 300;
                  setTimeout(function () {
                    var url = "https://api.themoviedb.org/3/movie/".concat(movie.imdbID, "/videos?api_key=").concat(process.env.THE_MOVIE_DB_API, "&language=en-US");
                    (0, _axios.default)(url).then(function (result) {
                      var data = result.data.results;
                      var filteredData = [];
                      var _iteratorNormalCompletion3 = true;
                      var _didIteratorError3 = false;
                      var _iteratorError3 = undefined;

                      try {
                        for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                          var key = _step3.value;
                          filteredData.push({
                            name: key.name,
                            url: key.key,
                            site: key.site
                          });
                        }
                      } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                          }
                        } finally {
                          if (_didIteratorError3) {
                            throw _iteratorError3;
                          }
                        }
                      }

                      return filteredData;
                    }).then(function (data) {
                      console.count(amount);
                      new _Database.default().fillCollectionTrailers({
                        schema: _movieFull.MovieFull,
                        data: data,
                        movieID: movie.imdbID
                      }).then(function (result) {
                        resolve(result);
                      }).catch(function (err) {
                        reject(err);
                      });
                    }).catch(function (err) {
                      reject(err);
                    });
                  }, i);
                }));
              });
            }).then(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Promise.all(promises);

                    case 2:
                      res.send("done");

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))).catch(function (err) {
              return next(err);
            });

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function makeTrailers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.makeTrailers = makeTrailers;

var makeUnixDate =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (
              /*new DB().getMany({
              "schema": MovieShort,
              "limit": 0,
              "sortBy": "_id",
              "skip": l
              }).then((data) => {
              let amount = data.length;
              data.forEach((movie) => {
              console.count(amount)
              promises.push(*/
              new Promise(function (resolve, reject) {
                new _Database.default().fillCollectionUnixDate({
                  schema: _MovieShort.MovieShort
                }).then(function (result) {
                  resolve(result);
                }).catch(function (err) {
                  reject(err);
                });
              })
              /*,
               new Promise((resolve, reject) => {
                 new DB().fillCollectionUnixDate({ "schema": MovieShort, "movieID": movie.imdbID })
                   .then(
                     (result) => {
                       resolve(result);
                     }
                   ).catch((err) => {
                     reject(err);
                   })
               })*/

              /*);
              });
              })*/
              .then(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        // await Promise.all(promises);
                        res.send("done");

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }))).catch(function (err) {
                return next(err);
              })
            );

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function makeUnixDate(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.makeUnixDate = makeUnixDate;