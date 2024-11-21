const request = require('supertest') // Supertest is a popular HTTP assertion library
const app = require('../index') // Import the app from your index.js file

/* eslint-env jest */
describe('GET /', () => {
  it('should return a JSON response with status 201', async () => {
    // Make a GET request to the root route
    const response = await request(app).get('/')

    // Assert that the status is 201
    expect(response.status).toBe(201)

    // Assert that the response is a JSON object with the expected keys
    expect(response.body).toHaveProperty('resource', 'Ice-Flakes')
    expect(response.body).toHaveProperty('count', 100)
    expect(response.body).toHaveProperty('shape', 'circle')
  })
})
