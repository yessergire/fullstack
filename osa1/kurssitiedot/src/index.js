import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <>
    <h1>{props.name}</h1>
  </>
)

const Content = (props) => (
  <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>
)

const Total = (props) => {
  const total = props.parts
                     .map(p => p.exercises)
                     .reduce((a,b) =>  a + b);
  return (
    <>
      <p>yhteensä {total} tehtävää</p>
    </>
  )
}

const Part = (props) => (
  <>
    <p>{props.part.name} {props.part.exercises}</p>
  </>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
