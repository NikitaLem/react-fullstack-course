import React from 'react';

const Button = ({text = "show", handler}) => <button onClick={() => handler()}>{ text }</button>

export default Button;
