import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const addAnecdote = async e => {
    e.preventDefault()
    const tmp = e.target.anecdote.value
    e.target.anecdote.value = ''
    props.createAnecdote(tmp)
  }

  return (
    <div>
      <h2>create new anecdote</h2>
      <form onSubmit={addAnecdote}>
        <div> <input name="anecdote" /> </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = { createAnecdote }
const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
