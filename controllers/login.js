const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findOne({ username: body.username })
  const passwordCorrect = user === null // if user not in db, set passwordCorrect to false
  ? false
  : await bcrypt.compare(body.password, user.passwordHash) // if user in db, check password 

  if(!(user && passwordCorrect)) { // i
    return response.status(401).json({ // status code 401 means 'unauthorized'
      error: 'invalid username or password'
    })
  }

  const tokenUser = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(tokenUser, process.env.SECRET) // create token, token is digitally signed using env variable SECRET
  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter