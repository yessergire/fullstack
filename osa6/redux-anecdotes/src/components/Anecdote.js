import React from 'react';

const Anecdote = props => (
  <>
    <div> {props.content} </div>
    <div> has {props.votes}
        <button onClick={props.vote}>vote</button>
    </div>
  </>
)
export default Anecdote
