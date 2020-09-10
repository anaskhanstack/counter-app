import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    let sum = counter;
    sum += 1;
    setCounter(sum);
  };

  const Decrement = () => {
    let sum = counter;
    sum -= 1;
    if (sum < 0) {
      sum = 0;
    }
    setCounter(sum);
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
