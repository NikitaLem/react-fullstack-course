import React from 'react';
import TooMany from './TooMany';
import Detailed from './Detailed';
import ListOfCounties from './ListOfCounties';

const CountriesPresenter = ({ currentCountries }) => {
  const amount = currentCountries.length;

  const showDetails = (name) => {
    console.log(name);
  };

  if (amount > 10) {
    return <TooMany />
  } else if (amount === 1) {
    return <Detailed
      data={currentCountries[0]}
      clickHandler={showDetails}
    />
  } else {
    return <ListOfCounties 
      data={currentCountries}
    />
  }
};

export default CountriesPresenter;