import React from 'react'
import { Link } from 'react-router-dom'

const Anecdotes = ({ anecdotes }) => {
  const rows = () => anecdotes.map(anecdote =>
    <li key={anecdote.id} >
      <Link to={`/anecdotes/${anecdote.id}`}>
        {anecdote.content}
      </Link>
    </li>
  )

  return (
    <>
      <h2>Anecdotes</h2>
      <ul>
        {rows()}
      </ul>
    </>
  )
}

export default Anecdotes
