import { Router } from 'express';
import tokenController from '../controllers/TokenController';
const validateResponserMiddleware = require("../middlewares/validateResponse");

const router = new Router();
router.use(validateResponserMiddleware);

router.post('/user', tokenController.store);

export default router;
