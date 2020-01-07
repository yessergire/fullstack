import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => (
  <>
    <p>{props.text}</p>
    <p>has {props.numberOfVotes} votes</p>
  </>
)

// https://gist.github.com/engelen
const argMax = (array) =>
  array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];


const App = (props) => {
  const [votes, setVotes] = useState(new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat))
  const [selected, setSelected] = useState(0)

  const handleNext = () =>
    setSelected(Math.floor(Math.random() * props.anecdotes.length));

  const handleVote = (i) => {
    const newVotes = [...votes];
    newVotes[i] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={props.anecdotes[selected]} numberOfVotes={votes[selected]} />
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={handleNext}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <Anecdote text={props.anecdotes[argMax(votes)]} numberOfVotes={votes[argMax(votes)]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
