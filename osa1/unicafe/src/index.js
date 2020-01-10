import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>
  <button onClick={props.handleClick}>{props.text}</button>

const Statistic = (props) =>
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>

const Feedback = (props) => (
  <>
    <h2>give feedback</h2>
    <Button handleClick={props.handleGood} text="good" />
    <Button handleClick={props.handleNeutral} text="neutral" />
    <Button handleClick={props.handleBad} text="bad" />
  </>
)

const Statistics = (props) => {
  if (props.all.length > 0) {
    const average = props.all.reduce((a,b) => a + b)

    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value={props.good}/>
            <Statistic text="neutral" value={props.neutral}/>
            <Statistic text="bad" value={props.bad}/>
            <Statistic text="all" value={props.all.length}/>
            <Statistic text="average" value={average}/>
            <Statistic text="positive" value={(props.good * 100. / props.all.length) + " %"}/>
          </tbody>
        </table>
      </>
    )
  } else return (
    <>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </>
  )
}

const App = () => {
  const [all, setAll] = useState([])

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all.concat(1))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all.concat(0))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all.concat(-1))
  }

  return (
    <div>
      <h1>Unicafe</h1>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
