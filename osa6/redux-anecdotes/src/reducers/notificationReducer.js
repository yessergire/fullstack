const reducer = (state = '', action) => {
  switch (action.type) {
    case 'NOTIFY':
      return action.data
    default:
      return state
  }
}

export const notification = (content, seconds = 5) =>  {
  return async dispatch => {
    dispatch({
      type: 'NOTIFY',
      data: content
    })
    setTimeout(() => {
      dispatch({
        type: 'NOTIFY',
        data: ''
      })
    }, seconds * 1000)
  }
}

export const setNotification = content => notification(content)
export default reducer
