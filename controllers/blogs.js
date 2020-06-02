const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
  const results = await Blog.find({}).populate('user', { username: 1, name: 1 })
  const formatted = results.map(result => result.toJSON())
  response.json(formatted)
})

blogsRouter.post('/', async (request, response) => {
  const blogData = request.body
  const user = await User.findById(blogData.userId) // use id provided in request to retrieve user info

    const blog = new Blog({ // create new blog document containing request body data
    title: blogData.title,
    author: blogData.author,
    url: blogData.url,
    likes: blogData.likes === undefined ? 0 : blogData.likes,
    user: user._id
  })

  const savedBlog = await blog.save() // save newly created document to db
  user.blogs = user.blogs.concat(savedBlog._id) // update user info retrieved in line 12 so that it's blogs value includes id of new blog doc 
  await user.save() // save updated document to db
  response.status(201).json(savedBlog.toJSON()) 
})

blogsRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const result = await Blog.findById(id)
  response.json(result.toJSON())
})

blogsRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  await Blog.findByIdAndRemove(id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const newData = {
    likes: body.likes
  }
  const updated = await Blog.findByIdAndUpdate(request.params.id, newData, { new: true })
  response.json(updated.toJSON())
})

module.exports = blogsRouter;