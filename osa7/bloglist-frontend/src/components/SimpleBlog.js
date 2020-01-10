import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className="simple-blog-title">
      {blog.title} {blog.author}
    </div>
    <div className="simple-blog-likes">
      blog has {blog.likes} likes
      <button onClick={onClick} className="simple-blog-like-button">like</button>
    </div>
  </div>
)

export default SimpleBlog