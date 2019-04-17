import express from 'express';
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

router.get('/', controller.index);
router.get('/getMovie', controller.getMovie);
router.get('/getMoviesByName', controller.getMoviesByName);
router.get('/getMovies', controller.getMovies);
router.get('/removeMovie', controller.removeMovie);

router.get('/fillDataBaseWithMovies', controller.fillDataBaseWithMovies);
router.get('/fillMoviesWithTrailers', controller.fillMoviesWithTrailers);
router.get('/fillMoviesWithUnixDate', controller.fillMoviesWithUnixDate);

router.post('/', controller.index);
router.post('/getMovie', controller.getMovie);
router.post('/getMoviesByName', controller.getMoviesByName);
router.post('/getMovies', controller.getMovies);
router.post('/removeMovie', controller.removeMovie);

export default router;
