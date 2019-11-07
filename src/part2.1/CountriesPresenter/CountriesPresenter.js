import React from 'react';
import TooMany from './TooMany';
import Detailed from './Detailed';
import ListOfCounties from './ListOfCounties';

const CountriesPresenter = ({ currentCountries, onShowHandler }) => {
  const amount = currentCountries.length;

  if (amount > 10) {
    return <TooMany />
  } else if (amount === 1) {
    return <Detailed
      data={currentCountries[0]}
      />
    } else {
      return <ListOfCounties 
      data={currentCountries}
      clickHandler={onShowHandler}
    />
  }
};

export default CountriesPresenter;
