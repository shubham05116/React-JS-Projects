import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = ({ courses, category }) => {
  const [clicked, setClicked] = useState([]);

  let allCourses = [];
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((CourseCategory) => {
        CourseCategory.forEach(Course => {
          allCourses.push(Course);
        });
      })
      return allCourses;
    }
    else {
      return courses[category];
    }
  };
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 mb-4'>{
        getCourses().map((course) => {
          return <Card key={course.id} course={course} clicked={clicked} setClicked={setClicked}></Card>

        })
      }
      </div>
    </div>
  )
}

export default Cards
