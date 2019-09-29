"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api.controller"));

var _passport = _interopRequireDefault(require("passport"));

var _Movies = require("../../middleware/validators/Movies.validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var controller = new _api["default"]();
router.get("/", controller.index);
router.get("/movies", _Movies.validateMovies, controller.getMovies);
router.get("/movies/movie/:id", _Movies.validateMovie, controller.getMovie);
router.get("/movies/name", _Movies.validateMoviesName, controller.getMoviesByName);
router.get("/movies/remove/:id", _Movies.validateMovie, controller.removeMovie);
router.get("/poster/:id", _Movies.validateMovie, controller.getMoviePoster);
router.get("/cast/:id", controller.getMovieCast);
router.get("/auth/login", function (req, res, next) {
  res.render("login");
});
router.get("/auth/logout", function (req, res, next) {
  res.send("logout");
});
router.get("/auth/redirect", _passport["default"].authenticate("google"), function (req, res, next) {
  res.json(req.session);
});
router.get("/auth/google", _passport["default"].authenticate("google", {
  scope: ["profile"]
}));
router.post("/login", _passport["default"].authenticate("local"), function (req, res) {
  res.redirect("/");
}); // router.get("/fillDataBaseWithMovies", controller.fillDataBaseWithMovies);
// router.get("/fillMoviesWithTrailers", controller.fillMoviesWithTrailers);
// router.get("/fillMoviesWithUnixDate", controller.fillMoviesWithUnixDate);

router.post("/", controller.index);
router.post("/movies", _Movies.validateMovies, controller.getMovies);
router.post("/movies/movie", _Movies.validateMovie, controller.getMovie);
router.post("/movies/name", _Movies.validateMoviesName, controller.getMoviesByName);
router.post("/movies/remove", _Movies.validateMovie, controller.removeMovie);
router.post("/poster", controller.getMoviePoster);
router.post("/cast", controller.getMovieCast);
var _default = router; //! make validation https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7

exports["default"] = _default;