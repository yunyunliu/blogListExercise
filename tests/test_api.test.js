const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const api = supertest(app)

test('blogs returned as json', async () => {
  await api 
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there is one blog', async () => {
  const response = await api.get('/api/blogs')
  const body = JSON.parse(response.text)
  expect(body).toHaveLength(1)
})

test('the blog has the title "myblog"', async () => {
  const response = await api.get('/api/blogs')
  const body = JSON.parse(response.text)
  expect(body[0].title).toBe('myblog')
})

afterAll(() => {
  mongoose.connection.close()
})