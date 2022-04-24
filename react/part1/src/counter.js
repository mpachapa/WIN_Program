import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const decreaseByOne = () => setCounter(counter - 1);

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <Button onClick={decreaseByOne} text="Minus"/>
      <Button onClick={setToZero} text="Zero"/>
      <Button onClick={increaseByOne} text="Plus"/>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default App;
