import express from 'express';
import { logout, signin, signinPage, signupPage } from '../controllers/auth.js';

const authRouter = express.Router()

authRouter.get('/', signinPage)
authRouter.get('/logout', logout)
authRouter.get('/signup', signupPage)

authRouter.post('/', signin)

export default authRouter;