import React from 'react'
import { connect } from 'react-redux'

import { useField } from '../hooks'
import { login } from '../reducers/loginReducer'
import Togglable from './Togglable'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
  const username = useField('text', 'Username')
  const password = useField('password', 'Password')

  const handleLogin = async (event) => {
    event.preventDefault()
    props.login({
      username: username.field.value,
      password: password.field.value
    })
    username.reset()
    password.reset()
  }

  return (
    <Form onSubmit={handleLogin}>
      <h2>Log in to application</h2>
      <Togglable buttonLabel="Login">
        <Form.Group>
          <Form.Control id='username' {...username.field} />
        </Form.Group>
        <Form.Group>
          <Form.Control id='password' {...password.field} />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Togglable>
    </Form>
  )
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(Login)