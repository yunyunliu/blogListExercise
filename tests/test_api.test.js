const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const bcrypt = require('bcrypt')
const Blog = require('../models/blog')
const User = require('../models/user')

const api = supertest(app)

const initialBlogs = [ 
  { 
    title: "React patterns", 
    author: "Michael Chan", 
    url: "https://reactpatterns.com/", 
    likes: 7
}, { 
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra", 
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", 
    likes: 5
}
];

beforeEach(async () => {
  await Blog.deleteMany({})

  let blog1 = new Blog(initialBlogs[0])
  await blog1.save()
  let blog2 = new Blog(initialBlogs[1])
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
    expect(body).toHaveLength(initialBlogs.length)
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
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
      const response = await api.get('/api/blogs')
      const body = response.body
      const titles = body.map(blog => blog.title)
  
      expect(body).toHaveLength(initialBlogs.length + 1)
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
})



afterAll(() => {
  mongoose.connection.close()
})