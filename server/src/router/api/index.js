import express from "express";
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

router.get("/", controller.index);
router.get("/movies/movie/:id", controller.getMovie);
router.get("/movies/name/:name/:limit?/:key?", controller.getMoviesByName);
router.get("/movies/:limit?/:sortBy?/:order?/:skip?", controller.getMovies);
// router.delete("/movies/remove/:id", controller.removeMovie);

// router.get("/fillDataBaseWithMovies", controller.fillDataBaseWithMovies);
// router.get("/fillMoviesWithTrailers", controller.fillMoviesWithTrailers);
// router.get("/fillMoviesWithUnixDate", controller.fillMoviesWithUnixDate);

router.post("/", controller.index);
router.post("/movies", controller.getMovies);
router.post("/movies/movie", controller.getMovie);
router.post("/movies/name", controller.getMoviesByName);
// router.post("/movies/remove", controller.removeMovie);

export default router;

//! make validation https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7
