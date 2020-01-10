import React from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog'

const Blogs = ({ blogs, user, voteBlog, removeBlog }) => {

  const rows = () => blogs.map(blog =>
    <Blog key={blog.id} blog={blog} user={user} removeBlog={removeBlog} voteBlog={voteBlog} />
  )

  return (
    <div>
      <h2>blogs</h2>
      {rows()}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  voteBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired
}

export default Blogs
