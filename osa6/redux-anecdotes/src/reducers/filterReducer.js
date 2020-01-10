const reducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.data
    default:
      return state
  }
}

export const filterChange = (content, seconds = 5) =>  {
  return {
    type: 'UPDATE_FILTER',
    data: content
  }
}

export default reducer
