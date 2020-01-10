import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducer'
const store = createStore(reducer)

const Statistic = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Feedback = ({ good, bad, neutral, zero }) => (
  <>
    <h2>give feedback</h2>
    <button onClick={good}>good</button>
    <button onClick={neutral}>nautral</button>
    <button onClick={bad}>bad</button>
    <button onClick={zero}>clear</button>
  </>
)

const Statistics = ({ all, good, bad, neutral, count, average, positive}) => (
  <>
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={count}/>
        <Statistic text="average" value={average}/>
        <Statistic text="positive" value={positive}/>
      </tbody>
    </table>
  </>
)

const App = () => {
  const good    = () => store.dispatch({ type: 'GOOD' })
  const neutral = () => store.dispatch({ type: 'OK' })
  const bad     = () => store.dispatch({ type: 'BAD' })
  const zero    = () => store.dispatch({ type: 'ZERO' })
  const sum = store.getState().good - store.getState().bad
  const count = store.getState().good + store.getState().ok + store.getState().bad

  if (count === 0) {
    return (
      <>
        <h1>Unicafe</h1>
        <Feedback good={good} neutral={neutral} bad={bad} zero={zero} />
        <p>No feedback given</p>
      </>
    )
  }

  const average = sum / count
  const positive = (store.getState().good * 100. / count) + " %"

  return (
    <div>
      <h1>Unicafe</h1>
      <Feedback good={good} neutral={neutral} bad={bad} zero={zero} />
      <h2>statistics</h2>
      <Statistics good={store.getState().good} neutral={store.getState().ok}
      bad={store.getState().bad} count={count} average={average} positive={positive} />
    </div>
  )
}

const renderApp = () =>
  ReactDOM.render(<App />, document.getElementById('root'))

renderApp()
store.subscribe(renderApp)
