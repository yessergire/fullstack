import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Comments = ({ blog }) => (
  <ListGroup>
    {blog.comments.map(comment =>
      <ListGroup.Item key={comment}>
        {comment}
      </ListGroup.Item>
    )}
  </ListGroup>
)

export default Comments