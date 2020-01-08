import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Country from './Country'

const Countries = ({countries, filter, handleShow}) => {
  const countriesToShow = (filter.length === 0)
                          ? []
                          : countries.filter(p => p.name.toLowerCase().includes(filter))

  const rows = () => countriesToShow.map(country =>
    <div key={country.name}>
      {country.name}
      <button onClick={(e) => handleShow(e, country)}>show</button>
    </div>
  )

  if (countriesToShow.length === 1) {
    return (
      <Country country={countriesToShow[0]} />
    )
  } else {
    return (
      <>
        {rows()}
      </>
    )
  }
}

export default Countries
