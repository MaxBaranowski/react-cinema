import express from "express";
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

router.get("/", controller.index);
router.get("/movies", controller.getMovies);
router.get("/movies/:id", controller.getMovie);
router.get("/movies/name/:name/:limit", controller.getMoviesByName);
router.delete("/movies/remove/:id", controller.removeMovie);

// router.get("/fillDataBaseWithMovies", controller.fillDataBaseWithMovies);
// router.get("/fillMoviesWithTrailers", controller.fillMoviesWithTrailers);
// router.get("/fillMoviesWithUnixDate", controller.fillMoviesWithUnixDate);

router.post("/", controller.index);
router.post("/movies", controller.getMovies);
router.post("/movies/:id", controller.getMovie);
router.post("/movies/name/:name", controller.getMoviesByName);
router.post("/movies/remove/:id", controller.removeMovie);

export default router;
