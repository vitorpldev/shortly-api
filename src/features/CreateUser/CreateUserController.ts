import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const data = await this.createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(201).json({
      message: 'User created successfully',
      data,
    });
  }
}
