import React from 'react';

const ListOfCounties = ({ data }) => 
  <>
    { data.map(item => <div key={item.numericCode}>{item.name}</div>) }
  </>

export default ListOfCounties;
