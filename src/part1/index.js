import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Part1 = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', amount: 10,
      },
      {
        name: 'Using props to pass data', amount: 7,
      },
      {
        name: 'State of a component', amount: 14,
      },
    ],
  };

  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Footer amounts={course.parts.map(part => part.amount)} />
    </>
  )
};

export default Part1;
