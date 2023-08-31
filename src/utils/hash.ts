import { AES, enc } from 'crypto-js';
import { secretKeyAes } from '../config';

export function encrypt(text: string): string {
  return AES.encrypt(text, secretKeyAes).toString();
}

export function decrypt(text: string): string {
  return AES.decrypt(text, secretKeyAes).toString(enc.Utf8);
}
