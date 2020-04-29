const dummy = blogs => 1;

const totalLikes = blogs => {
  const total = blogs.reduce((acc, blog) => acc + blog.likes, 0);
  return total;
}
module.exports = { dummy, totalLikes };