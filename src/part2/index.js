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
    const check = persons.some(pers => pers.name === newName);
    if (!check) return false;
    return window.confirm(`Do you want to change number for ${newName}?`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    if (checkName()) {
      const personObj = {
        ...persons.filter(p => p.name === newName)[0],
        number: newPhone,
      };
      api.putPerson(personObj)
        .then(resp => setPersons(persons.map(p => p.id !== resp.id ? p : resp)));
      return;
    }

    const newPerson = { name: newName, number: newPhone };
    api.createPerson(newPerson)
      .then(resp => setPersons([...persons, resp]));

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

  const deletePerson = (id) => {
    const answer = window.confirm(`Delete person with id ${id}?`)
    if (answer) {
      api.deletePerson(id)
        .then(() => setPersons(persons.filter(p => p.id !== id)));
    } 
  };

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
      <Persons
        currentPersons={currentPersons} 
        deletePerson={deletePerson}  
      />
    </>
  )
};

export default Part2;
