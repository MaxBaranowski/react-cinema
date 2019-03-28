import express from 'express';
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

router.get('/', controller.index);
router.get('/getMovie', controller.getMovie);
router.get('/getMoviesByName', controller.getMoviesByName);
router.get('/getMovies', controller.getMovies);

router.get('/getData', controller.getData);

router.post('/', controller.index);
router.post('/getMovie', controller.getMovie);
router.post('/getMoviesByName', controller.getMoviesByName);
router.post('/getMovies', controller.getMovies);

router.post('/getData', controller.getData);


export default router;
