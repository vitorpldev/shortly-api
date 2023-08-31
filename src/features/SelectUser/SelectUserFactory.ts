import { Request, Response } from 'express';
import { PostgresRepository } from '../../database/services/PostgresRepository';
import { SelectUserService } from './SelectUserService';
import { SelectUserController } from './SelectUserController';

export function selectUserFactory(request: Request, response: Response) {
  const postgresRepository = new PostgresRepository();
  const selectUserService = new SelectUserService(postgresRepository);
  const selectUserController = new SelectUserController(selectUserService);

  return selectUserController.handle(request, response);
}
