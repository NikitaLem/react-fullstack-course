import React, { useState } from 'react';
import Button from './Button/Button';
import Statistics from './Statistics/Statistics';

const Part12 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setters = new Map();
  setters.set('good', { value: good, setter: setGood });
  setters.set('neutral', { value: neutral, setter: setNeutral });
  setters.set('bad', { value: bad, setter: setBad });

  const addFeedBack = (grade) => {
    const { value, setter } = setters.get(grade);
    setter(value + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button onClickHandler={() => addFeedBack('good')} text="good"/>
      <Button onClickHandler={() => addFeedBack('neutral')} text="neutral"/>
      <Button onClickHandler={() => addFeedBack('bad')} text="bad"/>
      <h1>statistics</h1>
      <Statistics feedbackData={{ good, neutral, bad }}/>
    </>
  )
}

export default Part12;
