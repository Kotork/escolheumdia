import express from 'express';
import { logout, signin, signinPage } from '../controllers/auth.js';

const authRouter = express.Router()

authRouter.get('', signinPage)
authRouter.get('/logout', logout)

authRouter.post('/', signin)

export default authRouter;