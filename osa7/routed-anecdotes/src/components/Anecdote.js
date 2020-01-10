import React from 'react'

const Anecdote= ({ anecdote, vote }) => {
  const padding = {
    paddingLeft: 0,
    paddingBottom: 10,
  }

  return (
    <>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <div style={padding}>
        has {anecdote.votes} votes
        <button onClick={vote}>vote</button>
      </div>
      <div style={padding}>
        for more info see <a href={anecdote.info}>{anecdote.info}</a>
      </div>
    </>
  )
}

export default Anecdote
