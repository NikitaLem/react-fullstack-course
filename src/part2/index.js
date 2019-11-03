import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm/PersonForm';
import Persons from './Persons/Persons';
import Filter from './Filter/Filter';
import api from './api/api';

const Part2 = () => {
  const [ persons, setPersons] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ currentPersons, setCurrentPersons ] = useState([...persons]);

  useEffect(() => {
    api.persons().then((res) => setPersons([...res]));
  }, []);

  useEffect(() => {
    setCurrentPersons([...persons]);
  }, [persons]);

  const checkName = () => {
    return persons.some(pers => pers.name === newName);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkName()) {
      alert(`${newName} alredy exists in phonebook!`);
    } else {
      const maxId = Math.max(...persons.map(pers => pers.id)) + 1;
      setPersons([...persons, { id: maxId, name: newName, number: newPhone }]);
    }

    clearForm();
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onPhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const onSearchChange = (event) => {
    const searchText = event.target.value;

    if (!searchText) {
      setCurrentPersons([...persons]);
      return;
    }

    const filtredPersons = persons
      .filter(pers => pers.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    setCurrentPersons([...filtredPersons]);
  };

  const clearForm = () => {
    setNewName('');
    setNewPhone('');
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter onSearchChange={onSearchChange} />
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        onNameChange={onNameChange}
        onPhoneChange={onPhoneChange}
        onSubmitHandler={onSubmitHandler}
      />
      <Persons currentPersons={currentPersons} />
    </>
  )
};

export default Part2;
