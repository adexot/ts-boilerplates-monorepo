import { Application, RequestHandler } from 'express';
// import logger from './logger.util';

export default function registerMiddleware(app: Application, middlewares: RequestHandler[]): void {
  // eslint-disable-next-line arrow-parens
  middlewares.forEach(middleware => {
    app.use(middleware);
  });
}
