import React, { useState } from "react";
import Counter from "./Counter";
import { Button } from "@material-ui/core";

const counterList = [
  {
    _id: 1,
    value: 0,
  },
  {
    _id: 2,
    value: 0,
  },
  {
    _id: 3,
    value: 0,
  },
  {
    _id: 4,
    value: 0,
  },
];
export default function Counters() {
  const [counters, setCounter] = useState(counterList);

  const handleReset = () => {
    const counterList = [...counters];
    counterList.forEach((counter) => {
      counter.value = 0;
    });
    setCounter(counterList);
  };

  const handleIncrement = (counter) => {
    const counterList = [...counters];
    const index = counterList.indexOf(counter);
    counterList[index] = counter;
    counterList[index].value++;
    setCounter(counterList);
  };

  const handleDecrement = (counter) => {
    const counterList = [...counters];
    const index = counterList.indexOf(counter);
    counterList[index] = counter;
    counterList[index].value--;
    setCounter(counterList);
  };

  return (
    <React.Fragment>
      {counters.map((counter) => {
        return (
          <Counter
            key={counter._id}
            counter={counter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        );
      })}
      <Button onClick={handleReset} variant="contained" color="primary">
        Reset
      </Button>
    </React.Fragment>
  );
}
