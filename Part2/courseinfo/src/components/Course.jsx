import React from "react";

const Display = (props) => {
  return <h2>{props.courses.name}</h2>;
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.courses.parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.courses.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  console.log(total);
  return (
    <div>
      <b>total of {total} excercises</b>
    </div>
  );
};

const Course = (props) => {
  console.log(props);
  return (
    <div>
      <Display courses={props.courses} />
      <Content courses={props.courses} />
      <Total courses={props.courses} />
    </div>
  );
};
export default Course;
