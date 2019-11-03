import React from 'react';
import './Detailed.css';

const Detailed = ({data}) => {
  return (
    <>
      <h1>{data.name}</h1>
      <div>capital {data.capital}</div>
      <div>population {data.population}</div>
      <h2>languages</h2>
      <ul>
        { data.languages.map(lang => <li key={lang.name}>{lang.name}</li>) }
      </ul>
      <div className="img-container">
        <img src={data.flag} alt="flag"/>
      </div>
    </>
  );
};

export default Detailed;
