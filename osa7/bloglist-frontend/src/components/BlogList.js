import React from 'react'
import { Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const BlogList = (props) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      {props.blogs.map(blog =>
        <tr key={blog.id}>
          <LinkContainer to={`/blogs/${blog.id}`}>
            <td>{blog.title}</td>
          </LinkContainer>
          <td>{blog.author}</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default BlogList