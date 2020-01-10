
import blogService from '../services/blogs'
import loginService from '../services/login'

const reducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    blogService.setToken(action.data.token)
    return action.data

  case 'LOGOUT_USER':
    return null

  default: return state
  }
}

export const login = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    dispatch({
      type: 'SET_USER',
      data: user,
    })
  }
}

export const reloadLogin = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch({
        type: 'SET_USER',
        data: user,
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedBlogAppUser')
    blogService.setToken(null)
    dispatch({ type: 'LOGOUT_USER' })
  }
}

export default reducer