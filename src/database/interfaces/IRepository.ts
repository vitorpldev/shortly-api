import { User, Url } from '@prisma/client';

export type ResponseUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  auth: boolean;
  urls: Array<Url>;
};

export type ResponseUrl = {
  origin: string;
};

// INTERFACE CRUD USER
export interface ICreateUser {
  user: Pick<User, 'name' | 'email' | 'password'>;
}

export interface IUpdateUser {
  id: string;
  user: Partial<Pick<User, 'name' | 'email' | 'password' | 'token' | 'auth'>>;
}

export interface ISelectUser {
  user: Pick<User, 'email' | 'password'>;
}

export interface IDeleteUser {
  id: string;
}

// INTERFACE CRUD URL
export interface ICreateUrl {
  userId: string;
  url: Pick<Url, 'origin'>;
}

export interface IUpdateUrl {
  id: string;
  userId: string;
  url: Partial<Pick<Url, 'origin' | 'code'>>;
}

export interface IDeleteUrl {
  id: string;
}

export interface IFindUrl {
  url: Partial<Url>;
}

export interface IFindUser {
  user: Partial<User>;
}

export interface IRepository {
  createUser(props: ICreateUser): Promise<ResponseUser>;
  updateUser(props: IUpdateUser): Promise<ResponseUser>;
  deleteUser(props: IDeleteUser): Promise<void>;

  createUrl(props: ICreateUrl): Promise<ResponseUser>;
  updateUrl(props: IUpdateUrl): Promise<ResponseUser>;
  deleteUrl(props: IDeleteUrl): Promise<void>;

  findUser(props: IFindUser): Promise<ResponseUser | null>;
  findUrl(props: IFindUrl): Promise<ResponseUrl | null>;
}
