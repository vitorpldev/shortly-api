import { app } from '../app';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import request from 'supertest';

describe('Create User', () => {
  it('should be able to create a new user', async () => {
    const user = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await request(app).post('/api/user').send(user);

    expect(response.status).toBe(201);
    expect(response.body.data.user.email).toBe(user.email);
  });

  it('should be able to return an error message equivalent to the missing information', async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await request(app).post('/api/user').send(user);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(`The fields ${JSON.stringify(['name'])} must be filled in`);
  });
});
