import "@babel/polyfill";
import express from "express";
import path from "path";
import cookieSession from "cookie-session";
import ignoreFavIcon from "./middleware/ignoreFavIcon";
import sassMiddleware from "node-sass-middleware";
import cors from "cors";
import passport from "passport";

import "./oauth/local.strategy";
import "./oauth/google.strategy";
import session from "./middleware/session";
import Router from "./router/routes";

const app = express();
// hide server info
app.disable("x-powered-by");
//Enable All CORS Requests
app.use(cors());
// read JSON content-type (body parser built into express)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up session cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["cookie Secret"]
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

import M from "./models/MovieAdditional";
const movie = new M({ movieID: "tt5848272" });
movie.getCast()//.then(data => console.log(data));

export default app;
