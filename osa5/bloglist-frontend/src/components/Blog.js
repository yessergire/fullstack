import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, user, removeBlog, voteBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [expand, setExpand] = useState(false)

  const toggleExpand = () => setExpand(!expand)

  const isblogCreatedByCurrentUser = user =>
    user && user.username !== blog.user.username

  if (expand) {
    return (
      <div class="blog" style={blogStyle}>
        <div onClick={toggleExpand}>
          <div> {blog.title} {blog.author} </div>
          <div> <a href={blog.url}>{blog.url}</a> </div>
          <div> {blog.likes} likes <button onClick={() => voteBlog(blog)}>like</button> </div>
          <div> added by {blog.user.name} </div>
          { (isblogCreatedByCurrentUser(user)) ? '': <button onClick={() => removeBlog(blog)}> remove </button> }
        </div>
      </div>
    )
  }

  return (
    <div class="blog" style={blogStyle}>
      <div onClick={toggleExpand} className='blog-header'>
        {blog.title} {blog.author}
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  voteBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired
}

export default Blog
