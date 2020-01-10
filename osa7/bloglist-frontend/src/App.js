import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Login from './components/Login'
import Notification from './components/Notification'
import User from './components/User'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

import { reloadLogin } from './reducers/loginReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'

const App = (props) => {
  useEffect(() => {
    props.reloadLogin()
    props.initializeBlogs()
    props.initializeUsers()
  }, [])

  if (props.user === null) {
    return (
      <div>
        <Notification />
        <h2>Log in to application</h2>
        <Togglable buttonLabel="Log in">
          <Login />
        </Togglable>
      </div>
    )
  }

  return (
    <div>
      <Notification />
      <User />

      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>

      <Blogs />
    </div>
  )
}

// REMOVE!!!!
const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user,
  }
}

const mapDispatchToProps = {
  initializeUsers,
  initializeBlogs,
  reloadLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
