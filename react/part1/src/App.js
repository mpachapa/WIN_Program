const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = (prop) => {
  console.log(prop.course)
  return <h1>{prop.course.name}</h1>;
};

const Content = (prop) => {
  return (
    <div>
      {prop.course.parts.map((el, i) => {
        return <Part key={i} part={el.name} exercises={el.exercises} />;
      })}
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = (prop) => {
  const total = prop.course.parts
    .map((el) => el.exercises)
    .reduce((accum, cur) => accum + cur);
  return <p>Total number of exercises {total}</p>;
};

export default App;
