const _ = require('lodash')

const dummy = blogs => 1;

const totalLikes = blogs => {
  const total = blogs.reduce((acc, blog) => acc + blog.likes, 0);
  return total;
}

const favoriteBlog = blogs => {
  if (blogs.length === 0) {
    return 0;
  }
  const likes = blogs.map(blog => blog.likes);
  const max = Math.max(...likes);
  const mostLikes = blogs.find(blog => blog.likes === max);
  return mostLikes;
}

const mostBlogs = blogs => {
  const ordered = _.orderBy(blogs, ['likes'], ['desc'])
  const mostPopularAuthor = ordered[0].author;
  const filtered = _.filter(blogs, ['author', mostPopularAuthor])
 return {
  author: mostPopularAuthor,
  blogs: filtered.length
 }
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs };