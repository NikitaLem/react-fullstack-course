import React from 'react';

const Footer = ({amounts}) => {
  return (
    <b>Total {amounts.reduce((a, b) => a + b, 0)} of exercises</b>
  )
};

export default Footer;
