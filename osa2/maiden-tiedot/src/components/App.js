import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Country from './Country'
import Countries from './Countries'
import Filter from './Filter'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ country, setCountry ] = useState({})
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
         .then(response => {
            setCountries(response.data);
          })
  }, []);

  const handleFilterChange = (e) => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  const handleShow = (e, c) => {
    e.preventDefault()
    setCountry(c)
    setFilter('')
  }

  if (!!country.name && filter === '') {
    return (
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <Country country={country} />
        <Countries handleShow={handleShow} filter={filter} countries={countries} />
      </div>
    )
  } else {
    return (
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <Countries handleShow={handleShow} filter={filter} countries={countries} />
      </div>
    )
  }
}

export default App
