import React, { useState } from 'react'
import { useField } from '../hooks'
import PropTypes from 'prop-types'

const Login = ({ login }) => {
  const username = useField('text')
  const password = useField('password')

  const handleLogin = async (event) => {
    event.preventDefault()
    login({
      username: username.field.value,
      password: password.field.value
    })
    username.reset()
    password.reset()
  }

  return (
    <div class="loginForm">
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input name="Username" {...username.field} />
        </div>
        <div>
          password
          <input name="Password" {...password.field} />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login
