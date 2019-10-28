import React from 'react';

const Footer = ({amounts}) => {
  return (
    <p>Number of exercises {amounts.reduce((a, b) => a + b, 0)}</p>
  )
};

export default Footer;
