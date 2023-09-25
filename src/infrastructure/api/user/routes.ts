import { Router } from 'express';
import { Controller } from './controller';
import { container } from 'tsyringe';

const userRouter = Router();
const userController = container.resolve(Controller);


userRouter.post('/create', userController.handle);

export default userRouter