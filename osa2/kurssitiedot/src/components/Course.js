import React from 'react'
import Total from './Total'
import Content from './Content'
import Header from './Header'

const Course = (props) => (
  <div>
    <Header name={props.course.name} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </div>
)

export default Course
