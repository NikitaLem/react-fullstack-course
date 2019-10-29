import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const Course = ({course}) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Footer amounts={course.parts.map(part => part.amount)} />
    </>
  )
};

export default Course;
