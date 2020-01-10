import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <>
    <Link to='/'>anecdotes</Link>&nbsp;
    <Link to='/create'>create new</Link>&nbsp;
    <Link to='/about'>about</Link>&nbsp;
  </>
)

export default Menu
