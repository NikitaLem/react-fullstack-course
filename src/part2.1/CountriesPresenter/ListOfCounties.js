import React from 'react';
import Button from '../Button/Button';

const ListOfCounties = ({ data, clickHandler }) => {
  console.log(clickHandler);
  return (
    <> 
      { data.map(item => <div key={item.numericCode}>{item.name}<Button handler={() => clickHandler(item.name)} /></div>) }
    </>
  );
};
    
export default ListOfCounties;
