import { Router } from 'express';
import weatherRouter from './v1';

const api = Router();

api.use('/v1', weatherRouter);

export default api;