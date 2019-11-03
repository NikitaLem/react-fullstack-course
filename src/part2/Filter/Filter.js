import React from 'react';

const Filter = ({onSearchChange}) => {
  return (
    <div>
      <span>Search:</span>
      <input onChange={ onSearchChange }/>
    </div>
  )
}

export default Filter;
