import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import sassMiddleware from "node-sass-middleware";

import Router from './router/routes';

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
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

// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);
//
// function logErrors(err, req, res, next) {
//   console.error(err.stack);
//   next(err);
// }
//
// function clientErrorHandler(err, req, res, next) {
//   if (req.xhr) {
//     res.status(500).send({ error: 'Something failed!' });
//   } else {
//     next(err);
//   }
// }
//
// function errorHandler(err, req, res, next) {
//   res.status(500);
//   res.render('error', { error: err });
// }


export default app;
