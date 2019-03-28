import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import sassMiddleware from "node-sass-middleware";
import cors from 'cors';

import Router from './router/routes';

const app = express();

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

app.use(cors())

// Routes
app.use(Router);

export default app;
