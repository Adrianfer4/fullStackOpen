import React from "react";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return <Part course={props.course} />;
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      {props.course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
    </div>
  );
};
export default Course;
