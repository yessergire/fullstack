import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Users = (props) => (
  <Container>
    <Row>
      <h2>Users</h2>
    </Row>

    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name </th>
            <th>Blogs</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user =>
            <tr key={user.id}>
              <LinkContainer to={`/users/${user.id}`}>
                <td>{user.name}</td>
              </LinkContainer>
              <td>{user.blogs.length}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Row>
  </Container>
)

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps)(Users)