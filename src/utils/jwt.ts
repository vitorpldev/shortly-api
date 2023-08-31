import jwt from 'jsonwebtoken';
import { secretKeyJwt } from '../config';

export function generateToken(payload: any, expiresIn: string = '3d'): string {
  return jwt.sign(payload, secretKeyJwt, { expiresIn });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, secretKeyJwt);
  } catch (err) {
    return null;
  }
}
