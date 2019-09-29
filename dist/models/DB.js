"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _credentials = require("../credentials");

var _time = require("./time");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv["default"].config(); // disable mongoose buffers commands when the connection goes down until the driver manages to reconnect.


_mongoose["default"].set("bufferCommands", true);

_mongoose["default"].set("useCreateIndex", true);

_mongoose["default"].connection.on("connected", function (ref) {
  console.log("DB connection opened: ".concat(_time.timeStamp.full()));
});

_mongoose["default"].connection.on("disconnected", function () {
  console.log("DB connection closed: ".concat(_time.timeStamp.full()));
});

var DB = function DB() {
  var _this = this;

  _classCallCheck(this, DB);

  _defineProperty(this, "connect",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = _this.env;
            _context.next = _context.t0 === "development" ? 4 : _context.t0 === "production" ? 8 : 12;
            break;

          case 4:
            _context.next = 6;
            return _mongoose["default"].connect(_credentials.credentials.mongo.development.connectionString, _credentials.credentials.config);

          case 6:
            _this.connection = _context.sent;
            return _context.abrupt("break", 12);

          case 8:
            _context.next = 10;
            return _mongoose["default"].connect(_credentials.credentials.mongo.production.connectionString, _credentials.credentials.config);

          case 10:
            _this.connection = _context.sent;
            return _context.abrupt("break", 12);

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t1 = _context["catch"](0);
            throw new Error(_context.t1);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  })));

  _defineProperty(this, "disconnect", function () {
    try {
      switch (_this.env) {
        case "development":
          // if (this.connection) {
          //   this.connection.connection.close();
          // } else {
          //   throw "To close DB connection, connection must be opened!";
          // }
          break;

        case "production":
          break;
      }
    } catch (err) {
      throw new Error(err);
    }
  });

  if (this.constructor === DB) {
    throw new Error("This is Abstract class");
  }

  this.env = process.env.NODE_ENV;
  this.connection = null;
};

exports["default"] = DB;