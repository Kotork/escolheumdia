import express from 'express';
import { bookingsPage, cardsPage, clientsPage, invoicesPage, sddPage, servicesPage, staffPage, userPage, usersPage, updateCard } from '../controllers/user.js';

const userRouter = express.Router()

userRouter.get('/', userPage)
userRouter.get('/bookings', bookingsPage)
userRouter.get('/cards', cardsPage)
userRouter.get('/clients', clientsPage)
userRouter.get('/invoices', invoicesPage)
userRouter.get('/sdd', sddPage)
userRouter.get('/services', servicesPage)
userRouter.get('/staff', staffPage)
userRouter.get('/users', usersPage)

userRouter.post('/card', updateCard)

export default userRouter;