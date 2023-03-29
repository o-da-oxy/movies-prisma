import express from 'express';
import { routes as moviesRoutes } from '../movies/movies.router';
import { healthCheckController } from '../base-controllers/health-check.controller';
import { notFoundController } from '../base-controllers/not-found.controller';
import { errorHandler } from '../routes/error.handler';

const routes = express.Router();

routes.use('/movies', moviesRoutes);
routes.use('/health', healthCheckController);
routes.use('*', notFoundController);

routes.use(errorHandler);

export { routes };
