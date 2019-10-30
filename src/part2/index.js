import React, { useState } from 'react';

const Part2 = () => {
  const [ persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ searchText, setSearchText ] = useState('');
  const [ currentPersons, setCurrentPersons ] = useState([...persons]);

  const checkName = () => {
    return persons.some(pers => pers.name === newName);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (checkName()) {
      alert(`${newName} alredy exists in phonebook!`);
    } else {
      const maxId = Math.max(persons.map(pers => pers.id)) + 1;
      setPersons([...persons, { id: maxId, name: newName, phone: newPhone }]);
    }

    clearForm();
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value, newName);
  };

  const onPhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const onSearchChange = (event) => {
    setSearchText(event.target.value);

    if (!searchText) {
      setCurrentPersons([...persons]);
      return;
    }

    const filtredPersons = persons
      .filter(pers => pers.name.toLowerCase() === searchText.toLowerCase());
    setCurrentPersons([...filtredPersons]);
  };

  const clearForm = () => {
    setNewName('');
    setNewPhone('');
  }

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <div>{searchText}</div>
        <span>Search:</span>
        <input value={ searchText } onChange={ onSearchChange }/>
      </div>
      <h2>add new</h2>
      <form onSubmit={ onSubmitHandler }>
        <div>
          <span>name:</span>
          <input value={ newName } onChange={ onNameChange }/>
        </div>
        <div>
          <span>phone:</span>
          <input value={ newPhone } onChange={ onPhoneChange }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { currentPersons.map(pers => 
          <li key={ pers.id }>
            <p>{ pers.name }</p>
            <p>{ pers.number }</p>
          </li>
        )}
      </ul>
    </>
  )
};

export default Part2;
