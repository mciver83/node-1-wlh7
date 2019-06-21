const express = require('express')
const app = express()
const port = 5000

const blogFns = require('./blogFunction')

app.get('/api/greeting', (req, res) => {
  res.send('hello there!  thank you for requesting a greeting')
})

app.get('/api/blogPosts', blogFns.getPosts)
app.get('/api/blogPosts/:id', blogFns.getPost)


app.listen(port, () => {
  console.log('server is listening on port', port)
})
