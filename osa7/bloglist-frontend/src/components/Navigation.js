import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = (props) => {

  if (!props.user) {
    return (
      <Navbar bg="light" expand="lg" className="bg-light justify-content-between">
        <div className="container">
          <Navbar.Brand>Blog App</Navbar.Brand>
        </div>
      </Navbar>
    )
  }

  return (
    <Navbar bg="light" expand="lg" className="bg-light justify-content-between">
      <div className="container">
        <LinkContainer to="/">
          <Navbar.Brand>Blog App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav>
            <NavDropdown title={props.user.name} id="user-dropdown">
              <NavDropdown.Item href="#" onClick={props.logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)