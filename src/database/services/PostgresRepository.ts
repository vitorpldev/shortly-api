import { ICreateUrl, ICreateUser, IDeleteUrl, IDeleteUser, IFindUrl, IFindUser, IRepository, IUpdateUrl, IUpdateUser, ResponseUrl, ResponseUser } from '../interfaces/IRepository';
import { generateToken } from '../../utils/jwt';
import { prisma } from '../client';
import { generateCode } from '../../utils/code';
import { encrypt } from '../../utils/hash';

export class PostgresRepository implements IRepository {
  async createUser(props: ICreateUser): Promise<ResponseUser> {
    const user = await prisma.user.create({
      data: {
        name: props.user.name,
        email: props.user.email,
        password: encrypt(props.user.password),
        token: generateToken({}),
        code: generateCode(4).toLocaleUpperCase(),
      },
      include: {
        urls: true,
      },
    });

    return user;
  }

  async updateUser(props: IUpdateUser): Promise<ResponseUser> {
    const user = await prisma.user.update({
      where: {
        id: props.id,
      },
      data: props.user,
      include: {
        urls: true,
      },
    });

    return user;
  }

  async deleteUser(props: IDeleteUser): Promise<void> {
    await prisma.user.delete({
      where: {
        id: props.id,
      },
    });
  }

  async createUrl(props: ICreateUrl): Promise<ResponseUser> {
    const user = await prisma.user.update({
      where: {
        id: props.userId,
      },
      data: {
        urls: {
          create: {
            origin: props.url.origin,
            code: generateCode(6),
          },
        },
      },
      include: {
        urls: true,
      },
    });

    return user;
  }

  async updateUrl(props: IUpdateUrl): Promise<ResponseUser> {
    const user = await prisma.user.update({
      where: {
        id: props.userId,
      },
      data: {
        urls: {
          update: {
            where: {
              id: props.id,
            },
            data: props.url,
          },
        },
      },
      include: {
        urls: true,
      },
    });

    return user;
  }

  async deleteUrl(props: IDeleteUrl): Promise<void> {
    await prisma.url.delete({
      where: {
        id: props.id,
      },
    });
  }

  async findUser(props: IFindUser): Promise<ResponseUser | null> {
    const user = await prisma.user.findFirst({
      where: props.user,
      include: {
        urls: true,
      },
    });

    return user;
  }

  async findUrl(props: IFindUrl): Promise<ResponseUrl | null> {
    const url = await prisma.url.findFirst({
      where: props.url,
    });

    return url;
  }
}
