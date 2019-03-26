import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from 'mongoose';
// import { credentials } from "./credentials"
import sassMiddleware from "node-sass-middleware";

import Router from './router/routes';

const app = express();
// database mongoose initialize
// switch (app.get('env')) {
//   case 'development':
//     mongoose.connect(credentials.mongo.development.connectionString, credentials.config);
//     break;
//   case 'production':
//     mongoose.connect(credentials.mongo.production.connectionString, credentials.config);
//     break;
//   default:
//     throw new Error('Error, unknown env: ' + app.get('env'));
// }


// mongoose.connection.on("connected", function (ref) {
//   console.log("Connected to " + " DB!");
// });

// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose default connection to DB :' + ' disconnected');
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));//???
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// use scss middleware
app.use(sassMiddleware({
  src: path.join(__dirname, "../public"),
  dest: path.join(__dirname, "../public"),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use(Router);

export default app;
