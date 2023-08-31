import { IRepository } from '../../database/interfaces/IRepository';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../../helpers/errors';
import { decrypt } from '../../utils/hash';
import { generateToken } from '../../utils/jwt';
import { SelectUserDTO, SelectUserSchema } from './SelectUserDTO';

export class SelectUserService {
  constructor(private repository: IRepository) {}

  async execute(props: SelectUserDTO) {
    const result = SelectUserSchema.safeParse(props);

    if (!result.success) {
      const errorFields = result.error.issues.flatMap((obj) => obj.path || []);
      throw new BadRequestError(`The fields ${JSON.stringify(errorFields)} are invalid`);
    }

    const user = await this.repository.findUser({
      user: {
        email: result.data.email,
      },
    });

    if (!user) throw new NotFoundError('The email address provided does not match any user');

    if (decrypt(user.password) !== result.data.password) {
      throw new UnauthorizedError('The password provided does not match the user with the email entered');
    }

    const access = generateToken({ id: user.id }, '15m');

    const { name, email, token, auth } = user;

    return {
      user: {
        name,
        email,
        auth,
      },
      refresh: token,
      access,
    };
  }
}
