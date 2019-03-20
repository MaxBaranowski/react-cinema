import express from 'express';
import API_controller from "./api_controller";

const router = express.Router();
const controller = new API_controller();

/* GET API page. */
router.get('/', controller.index);
// router.post('/test', controller.test);

export default router;
