import { Router } from 'express';
import { Weather } from './controllers';

const weatherRouter = Router();

weatherRouter.get('/today', Weather.get);

export default weatherRouter;