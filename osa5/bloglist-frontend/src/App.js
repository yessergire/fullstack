import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import Login from './components/Login'
import Notification from './components/Notification'
import User from './components/User'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

import blogService from './services/blogs'
import loginService from './services/login'

function App() {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [notice, setNotice] = useState('')

  const sortByLikes = (a, b) => b.likes - a.likes

  const updateMessage = msg => {
    setNotice(msg)
    setTimeout(()  => setNotice(''), 5000)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs(blogs.sort(sortByLikes))
    })
  }, [])

  // LOGIN
  const login = async (credentials) => {
    try {
      const user = await loginService.login(credentials)
      setUser(user)
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
    } catch (exception) {
      updateMessage('incorrect username or password')
    }
  }
  // LOGOUT
  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  if (user === null) {
    return (
      <div>
        <Notification message={notice} />
        <h2>Log in to application</h2>
        <Togglable buttonLabel="Log in">
          <Login login={login} />
        </Togglable>
      </div>
    )
  }

  const createBlog = (blog) => {
    blogService.create(blog)
      .then(newBlog => {
        const blogToAdd = {
          ...newBlog, user: {
            name: user.name,
            username: user.username
          }
        }
        setBlogs(blogs
          .concat(blogToAdd)
          .sort(sortByLikes))
        updateMessage(`added ${blogToAdd.title}`)
      })
      .catch(error => setNotice(error.response.data.error))
  }

  const voteBlog = async blog => {
    const blogToUpdate = {
      ...blog,
      user: blog.user.id,
      likes: blog.likes + 1
    }
    const newBlog = await blogService.update(blogToUpdate)
    setBlogs(blogs
      .filter(b => b.id !== blog.id)
      .concat(newBlog)
      .sort(sortByLikes))
  }

  const removeBlog = async (blog) => {
    if (window.confirm(`Do you want to remove blog '${blog.title}' by ${blog.author}?`)) {
      await blogService.remove(blog.id)
      setBlogs(blogs.filter(b => b.id !== blog.id)
        .sort(sortByLikes))
      updateMessage(`removed ${blog.title}`)
    }
  }

  return (
    <div>
      <Notification message={notice} />
      <User user={user} logout={logout} />

      <Togglable buttonLabel="new blog">
        <BlogForm createBlog={createBlog} />
      </Togglable>

      <Blogs blogs={blogs} user={user} voteBlog={voteBlog} removeBlog={removeBlog} />
    </div>
  )
}

export default App
