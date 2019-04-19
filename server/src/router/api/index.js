import express from 'express';
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

router.get('/', controller.index);
router.get('/movies', controller.getMovies);
router.get('/movies/:id', controller.getMovie);
router.get('/movies/name/:name', controller.getMoviesByName);
router.delete('/movies', controller.removeMovie);

router.get('/fillDataBaseWithMovies', controller.fillDataBaseWithMovies);
router.get('/fillMoviesWithTrailers', controller.fillMoviesWithTrailers);
router.get('/fillMoviesWithUnixDate', controller.fillMoviesWithUnixDate);

router.post('/', controller.index);
router.post('/movie', controller.getMovie);
router.post('/movies/name', controller.getMoviesByName);
router.post('/movies', controller.getMovies);
router.post('/remove', controller.removeMovie);

export default router;
