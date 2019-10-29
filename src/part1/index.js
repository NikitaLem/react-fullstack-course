import React from 'react';
import Course from './Course/Course';

const Part1 = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1, name: 'Fundamentals of React', amount: 10,
      },
      {
        id: 2, name: 'Using props to pass data', amount: 7,
      },
      {
        id: 3, name: 'State of a component', amount: 14,
      },
      {
        id: 4, name: 'Redux', amount: 11,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
    </>
  )
};

export default Part1;
