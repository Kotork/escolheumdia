import express from 'express';
import { cardsPage, staffPage, userPage, updateCard } from '../controllers/user.js';

const userRouter = express.Router()

userRouter.get('/', userPage)
userRouter.get('/cards', cardsPage)
userRouter.get('/staff', staffPage)

userRouter.post('/card', updateCard)

export default userRouter;