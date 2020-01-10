import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'
import { connect } from 'react-redux'

const anecdotesToShow = ({ filter, anecdotes }) =>
  anecdotes.filter(anecdote => anecdote.content
    .toLowerCase()
    .includes(filter))

const Anecdotes = (props) => {
  const vote = anecdote => {
    props.voteAnecdote(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 10)
  }

  return (
    <div>
    {props.anecdotesToShow.map(anecdote =>
      <Anecdote key={anecdote.id} content={anecdote.content}
        votes={anecdote.votes} vote={() => vote(anecdote)} />
    )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    anecdotes: state.anecdotes,
    anecdotesToShow: anecdotesToShow(state)
  }
}
const mapDispatchToProps = {
  setNotification,
  voteAnecdote,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes
