import React from 'react'
import { connect } from 'react-redux'

import BlogList from './BlogList'
import BlogForm from './BlogForm'
import { Container, Row } from 'react-bootstrap'

const Home = (props) => (
  <Container>
    <Row>
      <h2>Blogs</h2>
    </Row>
    <Row>
      <BlogForm />
    </Row>
    <Row>
      <BlogList blogs={props.blogs} />
    </Row>
  </Container>
)

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)