import express from "express";
import fs from "fs";
import logger from "morgan";

const router = express.Router();

// logger
router.use(logger('common', {
  stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
router.use(logger('dev'));

export default router;