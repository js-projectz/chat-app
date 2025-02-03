import express from "express";
import { createUser, getUser } from '../controllers/userController';

const router = express.Router();

router.post('/create', createUser);
router.get('/get', getUser);

export default router;