const app = require('./app');
const http = require('http')
const config = require('./utils/config');

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

// all this file does is 'launch application at specified port with built-in Node http object