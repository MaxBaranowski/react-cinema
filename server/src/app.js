import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import ignoreFavIcon from "./middleware/ignoreFavIcon";
import sassMiddleware from "node-sass-middleware";
import cors from 'cors';

import Router from './router/routes';

const app = express();

app.disable('x-powered-by'); // hide server info
app.use(cors()); //Enable All CORS Requests
app.use(cookieParser());
app.use(ignoreFavIcon); // ignore error with favicon 404

// use scss for styling server pages
app.use(sassMiddleware({
  src: path.join(__dirname, "../public"),
  dest: path.join(__dirname, "../public"),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(
  path.join(__dirname, "../public"), //root folder
  {}
));

app.set("views", path.join(__dirname, "views")); // view engine setup
app.set("view engine", "hbs"); // eanble hbs as a template engine 

app.use(express.json({
  limit: '1024kb',
  strict: true,
  type: "application/json"
}));

// Routes
app.use(Router);

export default app;
