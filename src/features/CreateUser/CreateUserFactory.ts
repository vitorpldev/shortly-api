import { Request, Response } from 'express';
import { PostgresRepository } from '../../database/services/PostgresRepository';
import { CreateUserService } from './CreateUserService';
import { CreateUserController } from './CreateUserController';

export function createUserFactory(request: Request, response: Response) {
  const postgresRepository = new PostgresRepository();
  const createUserService = new CreateUserService(postgresRepository);
  const createUserController = new CreateUserController(createUserService);

  return createUserController.handle(request, response);
}
