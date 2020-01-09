import React from 'react'

const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => (
  <form onSubmit={addPerson}>
    <div>name: <input onChange={handleNameChange} value={newName} /></div>
    <div>number: <input onChange={handleNumberChange} value={newNumber} /></div>
    <button type="submit">add</button>
  </form>
)

export default PersonForm
