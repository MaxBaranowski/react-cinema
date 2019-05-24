import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import ignoreFavIcon from "./middleware/ignoreFavIcon";
import sassMiddleware from "node-sass-middleware";
import cors from "cors";
import "./authentication/google.strategy";
import session from "./middleware/session";
import Router from "./router/routes";

const app = express();
// hide server info
app.disable("x-powered-by");
//Enable All CORS Requests
app.use(cors());
// read JSON content-type
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());
// ignore error with favicon 404
app.use(ignoreFavIcon);

// use scss for styling server pages
app.use(
  sassMiddleware({
    src: path.join(__dirname, "../public"),
    dest: path.join(__dirname, "../public"),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
  })
);

app.use(
  express.static(
    path.join(__dirname, "../public"), //root folder
    {}
  )
);

app.set("views", path.join(__dirname, "views")); // view engine setup
app.set("view engine", "hbs"); // eanble hbs as a template engine

app.use(
  express.json({
    limit: "1024kb",
    strict: true,
    type: "application/json"
  })
);

app.use(session);

// Routes
app.use(Router);

export default app;
