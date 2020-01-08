import React from 'react'

const Country = ({country}) => {
  console.log(country)
  const rows = () => country.languages.map(language =>
    <li key={language.iso639_1}>{language.name}</li>
  )
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <ul>
        {rows()}
      </ul>
      <img src={country.flag} width="200" />
    </div>
  )
}
export default Country
