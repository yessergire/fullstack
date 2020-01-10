import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const style = { marginBottom: 10 }
  return (
    <div style={style}>
      filter <input onChange={(e) => props.filterChange(e.target.value)} />
    </div>
  )
}

const mapDispatchToProps = { filterChange }
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter
