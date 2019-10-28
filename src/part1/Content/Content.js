import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
  return (
    parts.map((part, index) =>
      <Part key={index} name={part.name} amount={part.amount}/>
    )
  )
};

export default Content;
