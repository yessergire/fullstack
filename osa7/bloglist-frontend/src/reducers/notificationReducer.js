const reducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.data
  default: return state
  }
}

export const notification = (content, seconds = 5) =>  {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: ''
      })
    }, seconds * 1000)
  }
}

export const setNotification = content => notification(content)

export default reducer