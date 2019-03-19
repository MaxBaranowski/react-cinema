import express from 'express';
import User_controller from "./users_controller";

const router = express.Router();
const controller = new User_controller();

/* GET users listing. */
router.get('/', controller.show);

export default router;
