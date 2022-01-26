import express from 'express';
import { userPage, updateCard } from '../controllers/user.js';

const userRouter = express.Router()

userRouter.get('/', userPage)

userRouter.post('/card', updateCard)

export default userRouter;