import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { commentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import Togglable from './Togglable'
import { Form, Button } from 'react-bootstrap'

const CommentForm = (props) => {

  const comment = useField('text')

  const commentBlog = (event) => {
    event.preventDefault()
    props.commentBlog(props.blog, comment.field.value)
    props.setNotification(`you commented '${comment.field.value}'`)
    comment.reset()
  }

  return (
    <Form onSubmit={commentBlog}>
      <Togglable buttonLabel="new comment">
        <Form.Group>
          <Form.Control {...comment.field} id="comment-input" />
        </Form.Group>
        <Button variant="primary" id="save-comment" type="submit">Send</Button>
      </Togglable>
    </Form>
  )
}

export default connect(null, { commentBlog, setNotification })(CommentForm)
