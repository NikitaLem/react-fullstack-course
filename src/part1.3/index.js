import React, { useState } from 'react';
import Panel from './Panel/Panel';

const anecdotes = [
  {
    id: 1,
    text: 'If it hurts, do it more often',
    votes: 0,
  },
  {
    id: 2,
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0,
  },
  {
    id: 3,
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0,
  },
  {
    id: 4,
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0,
  },
  {
    id: 5,
    text: 'Premature optimization is the root of all evil.',
    votes: 0,
  },
  {
    id: 5,
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0,
  },
];

const Part13 = () => {
  const [anecs, setAnecs] = useState(anecdotes);
  const [selected, setSelected] = useState(0);

  const getRandomAnec = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randNum);
  };

  const addVoteToAnec = () => {
    const newAnecObj = {
      ...anecs[selected],
      votes: anecs[selected].votes + 1,
    };

    setAnecs(anecs.map(anec => anec.id === newAnecObj.id ? newAnecObj : anec));
  };

  const getBestAnec = () => {
    const maxVotes = Math.max(...anecs.map(anec => anec.votes));
    return anecs.find(anec => anec.votes === maxVotes).text;
  };

  return (
    <>
      <h1>Anecdote of a day</h1>
      <Panel anec={anecs[selected]} randomAnec={getRandomAnec} voteForAnec={addVoteToAnec}/>
      <h1>Anecdote with most votes</h1>    
      <p>{getBestAnec()}</p>
    </>
  )
};

export default Part13;
