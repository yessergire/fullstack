import React from 'react'
import Part from './Part'

const Content = (props) => {
  const rows = () => props.parts.map(part =>
    <Part key={part.id} part={part} />  )

  return (
    <>
      {rows()}
    </>
  )
}

export default Content
