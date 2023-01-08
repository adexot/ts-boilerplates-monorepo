import { Request, Response } from 'express';
import logger from './logger.util';

export default function requestLogger(req: Request, res: Response, next: () => void): void {
  const currentTime = Date.now().toLocaleString();
  logger.info(`Request to ${req.path} logged at: `, currentTime);
  next();
}
