const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getToken = request => {
  const authorization = request.get('authorization') // get contents of authorization header

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7) // this is the part of the header that contains the token
  }
  return null // if not authorization header provided, or doesn't use Bearer schema, return null
}

blogsRouter.get('/', async (request, response) => {
  const results = await Blog.find({}).populate('user', { username: 1, name: 1 })
  const formatted = results.map(result => result.toJSON())
  response.json(formatted)
})

blogsRouter.post('/', async (request, response) => {
  const blogData = request.body
  const token = getToken(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) { // if no token provided or wrong token
    return response.status(401).json({ error: 'token missing or invalid '})
  }
  const user = await User.findById(decodedToken.id) // use id provided in token (this is the user that is logged in) to retrieve user info

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
  try {
    const body = request.body
    const newData = {
      likes: body.likes
    }
    const updated = await Blog.findByIdAndUpdate(request.params.id, newData, { new: true })
    response.json(updated.toJSON())
    } catch (err) {
      console.log('error!', err.message)
    }
  })
  

module.exports = blogsRouter;