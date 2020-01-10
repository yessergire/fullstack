import anecdoteService from '../services/anecdotes'

const sortByVotes = (a, b) => b.votes - a.votes

const updateState = (state, newAnecdote) =>
  state.filter(anecdote => anecdote.id !== newAnecdote.id)
    .concat(newAnecdote)
    .sort(sortByVotes)

const voteAnecdoteHandler = (state, action) => {
  const anecdote = state.find(anecdote =>
    action.data.id === anecdote.id)
  const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
  return updateState(state, updatedAnecdote)
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ANECDOTES':
      return action.data

    case 'ADD_ANECDOTE':
      return  [ ...state, action.data ]

    case 'VOTE_ANECDOTE':
      return voteAnecdoteHandler(state, action)

    default:
      return state
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const anecdoteToUpdate = { ...anecdote, votes: anecdote.votes + 1 }
    const updatedAnecdote = await anecdoteService.update(anecdoteToUpdate)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: updatedAnecdote,
    })
  }
}

export const createAnecdote = content =>  {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'CREATE_ANECDOTES',
      data: anecdotes.sort((a, b) => b.votes - a.votes),
    })
  }
}

export default reducer
