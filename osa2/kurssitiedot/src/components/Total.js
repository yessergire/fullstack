import React from 'react'

const Total = (props) => {
  const total = props.parts
                     .map(p => p.exercises)
                     .reduce((a,b) =>  a + b);
  return (
    <b>Total of {total} exercises</b>
  )
}

export default Total
