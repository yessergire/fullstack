import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  if (visible) {
    return (
      <div>
        {props.children}
        <button className="btn btn-secondary" onClick={toggleVisibility}>cancel</button>
      </div>
    )
  }

  return (
    <div>
      <button className="btn btn-primary"  onClick={toggleVisibility}>{props.buttonLabel}</button>
    </div>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable