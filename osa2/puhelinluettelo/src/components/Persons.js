import React from 'react'

const Persons = ({persons, filter, handleDeletePerson}) => {

  const personsToShow = (filter === '')
      ? persons
      : persons.filter(p => p.name.toLowerCase().includes(filter))

  const rows = () => personsToShow.map(person =>
    <div key={person.name}>
      {person.name} {person.number}
      <button onClick={(e) => handleDeletePerson(e, person)}>delete</button>
    </div>
  )

  return (
    <>{rows()}</>
  )
}

export default Persons
