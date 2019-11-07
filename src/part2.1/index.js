import React, { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import CountriesPresenter from './CountriesPresenter/CountriesPresenter';
import api from './api/api';

const Part21 = () => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    api.countries().then((resp) => setCountries([...resp]));
  }, []);

  const [ currentCountries, setCurrentCountries ] = useState([...countries]);
  const [ searchText, setSearchText ] = useState('');

  useEffect(() => {
    const filteredCountries = countries
      .filter(cntry => cntry.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    setCurrentCountries([...filteredCountries]);
  }, [countries, searchText, setCurrentCountries]);

  const onSearchHandler = (event) => {
    setSearchText(event.target.value);
  };

  const showDetails = (name) => {
    setSearchText(name);
  };

  return (
    <>
      <Filter
        searchText={searchText}
        onSearchHandler={onSearchHandler}
      />
      <CountriesPresenter 
        currentCountries={currentCountries}
        onShowHandler={showDetails}
      />
    </>
  );
};

export default Part21;
