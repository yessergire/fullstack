import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import Togglable from './Togglable'
import { Form, Button } from 'react-bootstrap'


const BlogForm = (props) => {

  const title = useField('text', 'title')
  const author = useField('text', 'author')
  const url = useField('text', 'url')

  const addBlog = (event) => {
    event.preventDefault()
    const blog = {
      title: title.field.value,
      author: author.field.value,
      url: url.field.value,
      user: {
        name: props.user.name,
        username: props.user.username,
      }
    }
    props.createBlog(blog)
    props.setNotification(`added ${blog.title}`)
    title.reset()
    author.reset()
    url.reset()
  }

  return (
    <Form onSubmit={addBlog}>
      <Togglable buttonLabel="create new">
        <h2>create new</h2>
        <Form.Group>
          <Form.Control id="title" {...title.field} />
        </Form.Group>
        <Form.Group>
          <Form.Control id="author" {...author.field} />
        </Form.Group>
        <Form.Group>
          <Form.Control id="url" {...url.field} />
        </Form.Group>
        <Button variant="primary" id="createNewBlog" type="submit">create</Button>
      </Togglable>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { createBlog, setNotification })(BlogForm)