import { Request, Response } from 'express';
import { UpdateUserService } from './UpdateUserService';

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.user;

    const data = await this.updateUserService.execute({
      id,
      name,
      email,
      password,
    });

    return response.status(200).json({
      message: 'User updated successfully',
      data,
    });
  }
}
