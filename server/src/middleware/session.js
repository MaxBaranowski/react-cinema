import express from "express";
import session from "express-session";
import uuid from "uuid";

const app = express();

app.use(
  session({
    genid: req => uuid(), // use UUIDs for session IDs
    secret: "maksiu",
    resave: false,
    saveUninitialized: true
  })
);

export default app;
