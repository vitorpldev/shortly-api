import { Request, Response } from 'express';
import { PostgresRepository } from '../../database/services/PostgresRepository';
import { UpdateUserService } from './UpdateUserService';
import { UpdateUserController } from './UpdateUserController';

export function updateUserFactory(request: Request, response: Response) {
  const postgresRepository = new PostgresRepository();
  const updateUserService = new UpdateUserService(postgresRepository);
  const updateUserController = new UpdateUserController(updateUserService);

  return updateUserController.handle(request, response);
}
