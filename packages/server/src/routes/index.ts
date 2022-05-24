import { Application } from 'express';
import orderRoutes from './order';

/** Route register handler */
export default function registerRoutes(app: Application): void {
  app.use('/', orderRoutes);
}
