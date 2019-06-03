import express from "express";
import API_controller from "./api.controller";

import passport from "passport";

import {
  validateMovies,
  validateMovie,
  validateMoviesName
} from "../../middleware/validators/Movies.validator";

const router = express.Router();
const controller = new API_controller();

router.get("/", controller.index);
router.get("/movies", validateMovies, controller.getMovies);
router.get("/movies/movie/:id", validateMovie, controller.getMovie);
router.get("/movies/name", validateMoviesName, controller.getMoviesByName);
router.get("/movies/remove/:id", validateMovie, controller.removeMovie);
router.get("/poster/:id", validateMovie, controller.getMoviePoster);

router.get("/auth/login", (req, res, next) => {
  res.render("login");
});

router.get("/auth/logout", (req, res, next) => {
  res.send("logout");
});

router.get(
  "/auth/redirect",
  passport.authenticate("google"),
  (req, res, next) => {
    res.json(req.session);
  }
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.redirect("/");
});

// router.get("/fillDataBaseWithMovies", controller.fillDataBaseWithMovies);
// router.get("/fillMoviesWithTrailers", controller.fillMoviesWithTrailers);
// router.get("/fillMoviesWithUnixDate", controller.fillMoviesWithUnixDate);

router.post("/", controller.index);
router.post("/movies", validateMovies, controller.getMovies);
router.post("/movies/movie", validateMovie, controller.getMovie);
router.post("/movies/name", validateMoviesName, controller.getMoviesByName);
router.post("/movies/remove", validateMovie, controller.removeMovie);
router.post("/poster", controller.getMoviePoster);

export default router;

//! make validation https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7
