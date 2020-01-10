import React, { useState } from 'react'
import { useField } from '../hooks'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
  const author = useField('text')
  const title = useField('text')
  const url = useField('text')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      author: author.field.value,
      title: title.field.value,
      url: url.field.value
    })
    author.reset()
    url.reset()
    title.reset()
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <div>title <input name="title" {...title.field} /></div>
        <div>author <input name="author" {...author.field}/></div>
        <div>url <input name="url" {...url.field} /></div>
        <div><button type="submit">create</button></div>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired
}

export default BlogForm
