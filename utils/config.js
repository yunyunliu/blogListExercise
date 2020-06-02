require('dotenv').config();

// let MONGODB_URI = process.env.MONGODB_URI;
// let PORT = process.env.PORT;

// if (process.env.NODE_ENV === 'test') {
//   MONGODB_URI = process.env.TEST_MONGODB_URI;
// }

/* after testing delete lines 11-12, uncomment lines 3-8 */
let MONGODB_URI = process.env.TEST_MONGODB_URI;
let PORT = process.env.PORT;


module.exports = { MONGODB_URI, PORT };