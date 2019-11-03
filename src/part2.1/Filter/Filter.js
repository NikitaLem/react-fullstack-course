import React from 'react';

const Filter = ({ searchText, onSearchHandler }) => {
  return (
    <div>
      <span>find counties</span>
      <input type="text" value={searchText} onChange={onSearchHandler}/>
    </div>
  );
};

export default Filter;
