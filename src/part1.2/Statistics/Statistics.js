import React from 'react';
import Info from './Info';

const Statistics = ({feedbackData}) => {
  const { good, neutral, bad } = feedbackData;

  const getTotal = () => {
    return good + neutral + bad;
  };

  const getAverage = () => {
    return (good - bad) / getTotal() || 0;
  };

  const getPositive = () => {
    return `${good * 100 / getTotal()}%`;
  };

  if (!good && !neutral && !bad) return <p>No feedback given</p>

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Info title="good" value={good}/>
          <Info title="neutral" value={neutral}/>
          <Info title="bad" value={bad}/>
          <Info title="all" value={getTotal()}/>
          <Info title="average" value={getAverage()}/>
          <Info title="positive" value={getPositive()}/>
        </tbody>
      </table>
    </>
  )
};

export default Statistics;
