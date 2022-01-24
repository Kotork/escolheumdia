import express from 'express';
import { userPage } from '../controllers/user.js';

const userRouter = express.Router()

userRouter.get('/', userPage)

export default userRouter;