import { IRepository } from '../../database/interfaces/IRepository';
import { BadRequestError, ConflictError, NotFoundError, UnauthorizedError } from '../../helpers/errors';
import { UpdateUserDTO, UpdateUserSchema } from './UpdateUserDTO';

export class UpdateUserService {
  constructor(private repository: IRepository) {}

  async execute(props: UpdateUserDTO) {
    const result = UpdateUserSchema.safeParse(props);

    if (!result.success) {
      const errorFields = result.error.issues.flatMap((obj) => obj.path || []);
      throw new BadRequestError(`The fields ${JSON.stringify(errorFields)} are invalid`);
    }

    const { id, ...data } = result.data;

    if (!Object.values(data).some((value) => value !== undefined)) {
      throw new BadRequestError(`At least one field must be filled in`);
    }

    const userAlreadyExists = await this.repository.findUser({
      user: {
        id,
      },
    });

    if (!userAlreadyExists) {
      throw new NotFoundError('The id does not match any user');
    }

    if (userAlreadyExists.auth) {
      throw new UnauthorizedError('The user has not yet been authenticated');
    }

    if (data.email) {
      const userEmailAlreadyExists = await this.repository.findUser({
        user: {
          email: data.email,
        },
      });

      if (userEmailAlreadyExists) {
        throw new ConflictError('The provided email address is already associated with an existing account.');
      }
    }

    const user = await this.repository.updateUser({
      id,
      user: data,
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
