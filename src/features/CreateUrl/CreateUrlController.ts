import { Request, Response } from 'express';
import { CreateUrlService } from './CreateUrlService';

export class CreateUrlController {
  constructor(private createUrlService: CreateUrlService) {}

  async handle(request: Request, response: Response) {
    const { origin } = request.body;
    const { id } = request.user;

    const data = await this.createUrlService.execute({
      id,
      origin,
    });

    return response.status(201).json({
      message: 'Url created successfully',
      data,
    });
  }
}
