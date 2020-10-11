const app = require('./../../server')
const supertest = require('supertest')
const request = supertest(app)

it('test endpoint', async done => {
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('ok')
  done()
})
