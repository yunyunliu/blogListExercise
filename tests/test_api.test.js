const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const bcrypt = require('bcrypt')
const helper = require('./test_helper')
const Blog = require('../models/blog')
const User = require('../models/user')

const api = supertest(app)

describe('blogs routes', () => {
  beforeEach(async () => {
    await Blog.deleteMany({})
  
    let blog1 = new Blog(helper.initialBlogs[0])
    await blog1.save()
    let blog2 = new Blog(helper.initialBlogs[1])
    await blog2.save()
  })

  describe('when there are existing blog records in database', () => {
    test('blogs returned as json', async () => {
      await api 
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
    
    test('all blogs returned', async () => {
      const response = await api.get('/api/blogs')
      const body = response.body
      expect(body).toHaveLength(helper.initialBlogs.length)
    })
    
    test('among returned blogs is a blog with a specific title', async () => {
      const response = await api.get('/api/blogs')
      const body = response.body
      const titles = body.map(blog => blog.title)
      expect(titles).toContain("React patterns")
    })
    
    test('a valid blog can be added', async () => {
      const newBlog = { 
        title: "Canonical string reduction", 
        author: "Edsger W. Dijkstra", 
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", 
        likes: 12
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
        const response = await api.get('/api/blogs')
        const body = response.body
        const titles = body.map(blog => blog.title)
    
        expect(body).toHaveLength(helper.initialBlogs.length + 1)
        expect(titles).toContain("Canonical string reduction")
    })
  })
  
  describe('when provided with a specific id', () => {
    test('the blog with the corresponding id will be removed from db', async () => {
      const initialData = await Blog.find({})
      const blogToDelete = initialData[0]
  
      await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204)
      const dataAfterDelete = await Blog.find({})
      const titles = dataAfterDelete.map(blog => blog.title)
  
      expect(dataAfterDelete).toHaveLength(initialData.length - 1)
      expect(titles).not.toContain(blogToDelete.title)
    })
    test('retrieves blog with corresponding id', async () => {
      const initialData = await Blog.find({}) // mongoose query so you get an array of documents that match the query back
      const firstBlog = initialData[0].toJSON()
   
      const result = await api.get(`/api/blogs/${firstBlog.id}`) // api call, so you get an express response object back
      const body = result.body
      // console.log('response body: ', body)
      expect(firstBlog.title).toBe(body.title)
    })
    test('the corresponding data record can be edited', async () => {
      const initialData = await Blog.find({})
      const blog = initialData[0].toJSON()
      const newData = { likes: blog.likes + 1 }
      const updated = await api
        .put(`/api/blogs/${blog.id}`)
        .send(newData)
      expect(updated.body.likes).toBe(blog.likes + 1)
    })
  })
})

describe('users routes', () => {
  describe('when there are users already in the db', () => {
    beforeEach(async () => {
      await User.deleteMany({})
      const passwordHash = await bcrypt.hash('secretpassword', 10)
    
      const user1 = helper.initialUsers[0]
      const user2 = helper.initialUsers[1]
      user1.passwordHash = passwordHash
      user2.passwordHash = passwordHash

      const userWithPassword1 = new User(user1)
      await userWithPassword1.save()
      const userWithPassword2 = new User(user2)
      await userWithPassword2.save()
    })

    test('given a unique username, a new user is successfully created', async () => {
      const initial = await helper.usersInDb()
      const newUser = {
        username: 'yunx2',
        name: 'yunyun',
        password: 'password'
      }

      await api
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      const final = await helper.usersInDb()
      expect(final).toHaveLength(initial.length + 1)
      const usernames = final.map(user => user.username)
      expect(usernames).toContain(newUser.username)
    })
  })
})


afterAll(() => {
  mongoose.connection.close()
})