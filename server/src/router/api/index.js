import express from 'express';
import API_controller from "./api.controller";

const router = express.Router();
const controller = new API_controller();

/* GET API page. */
router.get('/', controller.index);
router.get('/getMovie', controller.getMovie);
router.get('/getMoviesByName', controller.getMoviesByName);

// router.post('/test', controller.test);

export default router;
