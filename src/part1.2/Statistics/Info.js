import React from 'react';

const Info = ({ title, value }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
  )
};

export default Info;
