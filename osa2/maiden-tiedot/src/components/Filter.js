import React from 'react'

const Filter = ({filter, handleFilterChange}) => (
  <>
    find countries <input value={filter} onChange={handleFilterChange} />
  </>
)

export default Filter
