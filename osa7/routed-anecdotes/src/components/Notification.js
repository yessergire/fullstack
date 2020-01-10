import React from 'react'

const Notification = ({ message }) => {
  const style = {
    marginBottom: '10px',
    display: (message === '')? 'none': ''
  }

  return (
    <div style={style}>
        {message}
    </div>
  )
}

export default Notification
