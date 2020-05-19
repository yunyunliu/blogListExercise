const User = require('../models/user')

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
}]

const initialUsers = [
  {
    username: 'hellas',
    name: 'arto hellas',
  }, {
    username: 'mluukkai',
    name: 'matti luukkainen',
  }
]
 

const usersInDb = async () => {
  const users = await User.find({})
  const formatted = users.map(user => user.toJSON())
  return formatted
}

module.exports = { initialBlogs, initialUsers, usersInDb }