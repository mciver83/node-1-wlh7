let blogs = require('./blogs.json')


module.exports = {
  getPosts,
  getPost,
}

// create a function that returns all blogs

function getPosts(req, res) {
  let { search } = req.query

  if (search) {
    search = search.toLowerCase()
    res.send(blogs.filter(blog => {
      return blog.title.toLowerCase().includes(search) || blog.content.toLowerCase().includes(search)
    }))
  } else {
    res.send(blogs)
  }
}

// create a function that takes in an id, and returns the blog with that id

function getPost(req, res) {
  let { id } = req.params
  for (let i = 0; i < blogs.length; i++) {
    if (+blogs[i].id === +id) {
      return res.send(blogs[i])
    }
  }
  // res.send(blogs.find(blog => +blog.id === +id))
}

// create a function that takes in a search term and returns all blogs that have that search term in either the title or content

function findBlogContent(req, res) {

  let { searchTerm } = req.query
  console.log(11111111, searchTerm)
  searchTerm = searchTerm.toLowerCase()
  // let arr = []
  // for (let i = 0; i < blogs.length; i++) {
  //   if (blogs[i].title.indexOf(searchTerm) !== -1 || blogs[i].content.indexOf(searchTerm) !== -1) {
  //     arr.push(blogs[i])
  //   }
  // }

  // return arr

  
}



