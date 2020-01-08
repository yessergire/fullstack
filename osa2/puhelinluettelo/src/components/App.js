import React, { useState, useEffect } from 'react'

import Notification from './Notification.js'
import Filter from './Filter.js'
import Persons from './Persons.js'
import PersonForm from './PersonForm.js'

import personsService from '../services/persons.js'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(init => setPersons(init))
  }, [])

  const updateMessage = (msg) => {
    setMessage(msg)
    setTimeout(()  => setMessage(''), 5000)
    setNewName('')
    setNewNumber('')
  }

  const addPerson = person => {
    personsService
      .create(person)
      .then(newPerson => setPersons([...persons, newPerson]))
  }

  const handleAddPerson = e => {
    e.preventDefault()
    if (newName.length === 0) return

    const nameNotInList = persons.map(p => p.name)
                         .every(name => name !== newName)

    if (nameNotInList) {
      addPerson({ name: newName, number: newNumber })
      updateMessage(`Added ${newName}`)
    } else {
      const person = persons.filter(p => p.name === newName)[0]
      const newPerson = {...person, number: newNumber}
      if (newNumber === person.number) {
        alert(`${newName} is already in added to phone book`)
      } else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(newPerson.id, newPerson)
          .then(updatePerson => {
            setPersons(persons.map(p => p.id === person.id ? updatePerson: p))
            updateMessage(`Information of ${newName} updated!`)
          })
          .catch(e => {
            updateMessage(`Information of ${newName} has already been removed from server`)
          })
      }
    }
  }

  const handleDeletePerson = (e, person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== person.id))
          updateMessage(`Deleted ${person.name}`)
        })
    }
  }

  return (
    <div>
      <Notification message={message} />
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={(e) => setFilter(e.target.value)} />

      <h2>add a new</h2>
      <PersonForm addPerson={handleAddPerson}
                  handleNameChange={(e) => setNewName(e.target.value)} newName={newName}
                  handleNumberChange={(e) => setNewNumber(e.target.value)} newNumber={newNumber} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App
