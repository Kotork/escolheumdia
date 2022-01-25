import express from 'express';
import { logout, signin, signinPage, signup, signupPage } from '../controllers/auth.js';

const authRouter = express.Router()

authRouter.get('/', signinPage)
authRouter.get('/logout', logout)
authRouter.get('/signup', signupPage)

authRouter.post('/', signin)
authRouter.post('/signup', signup)

export default authRouter;