import React from 'react'
import { connect } from 'react-redux'
import { Container, Alert } from 'react-bootstrap'

const Notification = (props) => {
  let style = {
    display: props.notification ? 'block': 'none'
  }
  return (
    <Container>
      <Alert style={style} variant="success">
        {props.notification}
      </Alert>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification