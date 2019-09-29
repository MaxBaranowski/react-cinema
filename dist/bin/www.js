#!/usr/bin/env node
// Using Environment Variables
"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("../app"));

var _debug = _interopRequireDefault(require("debug"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _https = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();
/**
 * Module dependencies.
 */
// var app = require('../index');
// var debug = require('debug')('server:server');
// var http = require('http');


// import http from 'http';
var debug = (0, _debug["default"])("server:server");
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3000");

_app["default"].set("port", port);
/**
 * Create HTTP server.
 */


var certOptions = {
  key: _fs["default"].readFileSync(_path["default"].resolve("localhost.key")),
  cert: _fs["default"].readFileSync(_path["default"].resolve("localhost.crt"))
};

var server = _https["default"].createServer(certOptions, _app["default"]);
/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(port, function () {
  console.log("server running on https://localhost:".concat(port));
});
server.on("error", onError);
server.on("listening", onListening);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * Event listener for HTTP server "error" event.
 */


function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port; // handle specific listen errors with friendly messages

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */


function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}