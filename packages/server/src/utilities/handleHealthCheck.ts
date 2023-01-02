import { Request, Response } from 'express';

export default function handleHealthCheck(_: Request, res: Response) {
  res.send('the api is working as expected');
  // res.status(204).end();
}
