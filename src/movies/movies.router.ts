import express from 'express';
import { moviesTestController } from '../movies/movies.controller';

const routes = express.Router();

routes.get('/', moviesTestController);

export { routes };
