import { Request, Response } from 'express';
import { PostgresRepository } from '../../database/services/PostgresRepository';
import { CreateUrlService } from './CreateUrlService';
import { CreateUrlController } from './CreateUrlController';

export function createUrlFactory(request: Request, response: Response) {
  const postgresRepository = new PostgresRepository();
  const createUrlService = new CreateUrlService(postgresRepository);
  const createUrlController = new CreateUrlController(createUrlService);

  return createUrlController.handle(request, response);
}
