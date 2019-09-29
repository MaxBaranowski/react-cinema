"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.credentials = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var credentials = {
  mongo: {
    development: {
      connectionString: "mongodb://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASS, "@ds131296.mlab.com:31296/").concat(process.env.DB_DATABASE_NAME)
    },
    production: {
      connectionString: "mongodb://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASS, "@ds131296.mlab.com:31296/").concat(process.env.DB_DATABASE_NAME)
    }
  },
  config: {
    useNewUrlParser: true
  }
};
exports.credentials = credentials;