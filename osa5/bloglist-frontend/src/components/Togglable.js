import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = (props) => {
  const [expand, setExpand] = useState(false)
  const toggleExpand = () => setExpand(!expand)

  if (expand) {
    return (
      <div>
        {props.children}
        <button onClick={toggleExpand}>cancel</button>
      </div>
    )
  }

  return (
    <button onClick={toggleExpand}>{props.buttonLabel}</button>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable
