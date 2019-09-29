import express from 'express';
import Home_controller from "./home.controller";

const router = express.Router();
const controller = new Home_controller();

router.get('/', controller.show);

export default router;
