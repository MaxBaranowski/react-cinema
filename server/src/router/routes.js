import express from "express";
import createError from "http-errors";
import logger from "../middleware/logger";

import Home from "./public/home/index";
import API from "./api/index";
import Page404 from "./Page404";

const router = express.Router();

router.use(
  express.urlencoded({
    extended: false,
    limit: "100kb",
    parameterLimit: 10
  })
);

router.use("/", Home);
router.use("/api", API);
router.use(Page404);

// error logger will be hear
router.use((err, req, res, next) => {
  console.error("Log: ", err.message);
  next(err);
});

router.use(logger);

router.use((err, req, res, next) => {
  if (req.app.get("env") === "development") {
    next(createError(500, err));
  } else {
    res.status(500);
    res.json({ error: err.message });
  }
});

// development error showing
router.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
  // process.exit(0)
});

export default router;
