import express from 'express';
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

router.get('/', controller.index);
router.get('/getMovie', controller.getMovie);
router.get('/getMoviesByName', controller.getMoviesByName);

router.post('/', controller.index);
router.post('/getMovie', controller.getMovie);
router.post('/getMoviesByName', controller.getMoviesByName);

export default router;
