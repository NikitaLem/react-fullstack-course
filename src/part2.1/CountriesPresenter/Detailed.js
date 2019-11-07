import React, { useState, useEffect } from 'react';
import api from '../api/api';
import './Detailed.css';

const Detailed = ({data}) => {

  const [ weather, setWeater ] = useState({});

  useEffect(() => {
    api.weather(data.name)
      .then(data => setWeater({...data}));
  }, [data.name]);

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
      { weather.temperature && <div>
        <h2>Weather in {data.name}</h2>
        <p>
          <b>temperature: </b><span>{weather.temperature} Celsius</span>
        </p>
        <p>
          <img src={weather.weather_icons[0]} alt="temperature"/>
        </p>
        <p>
          <b>wind: </b><span>{weather.wind_speed} kph direction {weather.wind_dir}</span>
        </p>
      </div> }
    </>
  );
};

export default Detailed;
