import React from 'react'
import { connect } from 'react-redux'
import BlogList from './BlogList'

const User = (props) => {
  const user = props.users.find(user => user.id === props.userId)

  if (!user)
    return null

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <BlogList blogs={user.blogs} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(User)