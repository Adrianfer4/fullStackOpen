import React from "react";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  console.log(props);
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
      <Part parts={props.course.parts[0]} />
      <Part parts={props.course.parts[1]} />
      <Part parts={props.course.parts[2]} />
      <Part parts={props.course.parts[3]} />
    </div>
  );
};

const Total = (props) => {
  const total = props.course.parts.reduce(
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
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  );
};
export default Course;
