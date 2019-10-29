import React from 'react';
import Course from './Course/Course';

const Part1 = () => {
  const courses = 
  [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          amount: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          amount: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <>
      <h1>All courses</h1>
      {courses.map(course => <Course course={course}/>)}
    </>
  )
};

export default Part1;
