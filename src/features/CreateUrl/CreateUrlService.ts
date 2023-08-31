import { IRepository } from '../../database/interfaces/IRepository';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../../helpers/errors';
import { CreateUrlDTO, CreateUrlSchema } from './CreateUrlDTO';

export class CreateUrlService {
  constructor(private repository: IRepository) {}

  async execute(props: CreateUrlDTO) {
    const result = CreateUrlSchema.safeParse(props);

    if (!result.success) {
      const errorFields = result.error.issues.flatMap((obj) => obj.path || []);
      throw new BadRequestError(`The fields ${JSON.stringify(errorFields)} must be filled in`);
    }

    const userAlreadyExists = await this.repository.findUser({
      user: {
        id: result.data.id,
      },
    });

    if (!userAlreadyExists) {
      throw new NotFoundError('The id does not match any user');
    }

    if (userAlreadyExists.auth) {
      throw new UnauthorizedError('The user has not yet been authenticated');
    }

    const user = await this.repository.createUrl({
      userId: result.data.id,
      url: {
        origin: result.data.origin,
      },
    });

    const { name, email, auth, urls } = user;

    return {
      user: {
        name,
        email,
        auth,
      },
      urls,
    };
  }
}
