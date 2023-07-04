import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '07-8747-4757',
    },    
    {
      name: 'Ada Lovelace', 
      number: '39-44-5323523',
    },
    { 
        name: 'Dan Abramov', 
        number: '12-43-234345', 
    },
    { 
        name: 'Mary Poppendieck', 
        number: '39-23-6423122', 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event)=>{
    setSearchQuery(event.target.value)
  }
  const handleNameChange=(event)=>{
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  const addName = (e) => {
    e.preventDefault();

    const nameExists = persons.find((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, phone: newPhone };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhone('');
    }
  };

    const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        addName={addName}
      />

      <h3>Numbers</h3>
      <Persons 
        persons={filteredPersons}
      />

    </div>
  )
}
const Filter=({searchQuery, handleSearchChange})=>{
    return(
        <div>
            Filter by name: <input value={searchQuery} onChange={handleSearchChange} />
        </div>
    )

}
const PersonForm=({newName, newPhone, handleNameChange,handlePhoneChange, addName})=>{
    <form onSubmit={addName}>
        <h1>Add a new</h1>
        <div>
          name: <input value={newName}  onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

}
const Persons=({persons})=>{
    return(
        <>
            <h2>Numbers</h2>
            {persons.map((person, index)=>(
                <PersonalDetails key={index} person={person} />
            ))}
        </>
    )

}
const PersonalDetails = ({person})=>{
    return(
        <p>{person.name} - {person.number}</p>
    )
}

export default App