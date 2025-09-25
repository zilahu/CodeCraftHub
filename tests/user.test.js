const request = require('supertest');
const app = require('../src/app');

describe('User Management Service', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
    expect(response.statusCode).toBe(201);
  });

  it('should login a user', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({ email: 'john@example.com', password: 'password123' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
