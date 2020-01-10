import React from 'react'
import { connect } from 'react-redux'
import { voteBlog, deleteBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import Comments from './Comments'
import CommentForm from './CommentForm'
import { Container, Row, Form, Button } from 'react-bootstrap'

const Blog = (props) => {
  const blog = props.blogs.find(blog => blog.id === props.blogId)
  const isCurrentUser = () => props.user && props.user.username !== blog.user.username

  const handleVote = (blog) => () => {
    props.voteBlog(blog)
    props.setNotification(`you voted '${blog.title}'`)
  }

  const handleRemove = (blog) => () => {
    if (!window.confirm(`Do you want to remove blog '${blog.title}' by ${blog.author}?`))
      return
    props.deleteBlog(blog)
    props.setNotification(`you deleted '${blog.title}'`)
  }

  if (!blog)
    return null

  return (
    <Container>
      <Row>
        <h1>{blog.title} {blog.author}</h1>
      </Row>
      <Row>
        <a href={blog.url}>{blog.url}</a>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>{blog.likes} likes </Form.Label>
          <Button variant="primary" id="likeBlog" onClick={handleVote(blog)}>like</Button>
        </Form.Group>
      </Row>
      <Row>
        added by {blog.user.name}
      </Row>
      <Row>
        { (isCurrentUser()) ? '':
          <Button variant="danger" onClick={handleRemove(blog)}>remove</Button>
        }
      </Row>
      <Row>
        <h2>comments</h2>
      </Row>
      <Row>
        <CommentForm blog={blog} />
      </Row>
      <Row>
        <Comments blog={blog} />
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    blogs: state.blogs,
  }
}

const mapDispatchToProps = {
  setNotification,
  voteBlog,
  deleteBlog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)