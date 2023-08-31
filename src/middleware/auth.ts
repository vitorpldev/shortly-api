import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt';
import { UnauthorizedError } from '../helpers/errors';

export async function authMiddleware(request: Request, _response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new UnauthorizedError('Token Unauthorized');

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) throw new UnauthorizedError('Token Unauthorized');

  request.user = decoded;
  request.token = token;
  return next();
}
