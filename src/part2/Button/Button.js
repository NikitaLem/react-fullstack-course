import React from 'react';

const Button = ({text='click', handler}) => <button onClick={handler}>{text}</button>

export default Button;
