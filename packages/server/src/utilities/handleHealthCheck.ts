import { Request, Response } from 'express';

export default function handleHealthCheck(_: Request, res: Response): void {
  res.status(204).end();
}
