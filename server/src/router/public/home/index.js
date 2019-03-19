import express from 'express';
import Home_controller from "./home_controller";

const router = express.Router();
const controller = new Home_controller();

/* GET home page. */
router.get('/', controller.show);

export default router;
