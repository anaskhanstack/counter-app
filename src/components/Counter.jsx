import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    counter < 0 ? setCounter(counter) : setCounter(counter - 1);
  };

  return (
    <div>
      <h3>{counter < 1 ? "zero" : counter}</h3>
      <button onClick={() => Increment()}>+</button>
      <button onClick={() => Decrement()}>-</button>
    </div>
  );
};

export default Counter;
