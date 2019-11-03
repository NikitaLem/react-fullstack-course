import React from 'react';

const Persons = ({currentPersons}) => {
  return (
    <>
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
}

export default Persons;
