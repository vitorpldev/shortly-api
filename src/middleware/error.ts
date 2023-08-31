import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../helpers/errors';

export function errorMiddleware(error: Error & ApiError, _request: Request, response: Response, _next: NextFunction) {
  const status = error.status ?? 500;

  return response.status(status).json({ error: error.message });
}
