import { IRepository } from '../../database/interfaces/IRepository';
import { CreateUserDTO, CreateUserSchema } from './CreateUserDTO';
import { generateToken } from '../../utils/jwt';
import { BadRequestError, ConflictError, NotFoundError } from '../../helpers/errors';

export class CreateUserService {
  constructor(private repository: IRepository) {}

  async execute(props: CreateUserDTO) {
    const result = CreateUserSchema.safeParse(props);

    if (!result.success) {
      const errorFields = result.error.issues.flatMap((obj) => obj.path || []);
      throw new BadRequestError(`The fields ${JSON.stringify(errorFields)} are invalid`);
    }

    const userAlreadyExists = await this.repository.findUser({
      user: {
        email: result.data.email,
      },
    });

    if (userAlreadyExists) {
      throw new ConflictError('The provided email address is already associated with an existing account.');
    }

    const user = await this.repository.createUser({
      user: result.data,
    });

    const access = generateToken({ id: user.id }, '15m');

    const { name, email, token: refresh, auth, urls } = user;

    return {
      user: {
        name,
        email,
        auth,
      },
      urls,
      refresh,
      access,
    };
  }
}
