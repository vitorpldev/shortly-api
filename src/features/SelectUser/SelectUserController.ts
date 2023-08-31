import { Request, Response } from 'express';
import { SelectUserService } from './SelectUserService';

export class SelectUserController {
  constructor(private selectUserService: SelectUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const data = await this.selectUserService.execute({
      email,
      password,
    });

    return response.status(200).json({
      message: 'User selected successfully',
      data,
    });
  }
}
