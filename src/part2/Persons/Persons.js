import React from 'react';
import Button from '../Button/Button';

const Persons = ({currentPersons, deletePerson}) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        { currentPersons.map(pers => 
          <li key={ pers.id }>
            <p>{ pers.name }</p>
            <p>{ pers.number }</p>
            <Button text="delete" handler={() => deletePerson(pers.id)}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default Persons;
