import React from 'react'

const User = ({ user, logout }) => (
  <div>
    <i>{user.username}</i> logged in <button onClick={logout}>logout</button>
  </div>
)

export default User
