import React from 'react';
import Button from '../Button/Button';

const Panel = ({anec, randomAnec, voteForAnec}) => {
  return (
    <>
      <p>{anec.text}</p>
      <p>has {anec.votes} votes</p>
      <Button text="vote" onClickHandler={() => voteForAnec()}/>
      <Button text="next anec" onClickHandler={() => randomAnec()}/>
    </>
  )
};

export default Panel;
