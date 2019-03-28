#!/usr/bin/env node


// Using Environment Variables
import dotenv from "dotenv";
dotenv.config();

/**
 * Module dependencies.
 */

// var app = require('../index');
// var debug = require('debug')('server:server');
// var http = require('http');
import app from '../app'
import debugLib from 'debug';
import http from 'http';
const debug = debugLib('server:server');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort("443" || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
import fs from "fs";
import path from "path";
import https from "https";

var certOptions = {
  key: fs.readFileSync(path.resolve('localhost.key')),
  cert: fs.readFileSync(path.resolve('localhost.crt'))
}
var server = https.createServer(certOptions, app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
});
server.on('error', onError);
server.on('listening', onListening);

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
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
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
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
