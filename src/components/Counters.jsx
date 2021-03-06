import React, { useState } from "react";
import Counter from "./Counter";
import { Button } from "@material-ui/core";
import CustomizedBadges from "./ShoppingBatch";

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
export default function Counters({ getCounter }) {
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

  const handleDelete = (counter) => {
    const counterList = counters.filter((c) => c._id !== counter._id);
    setCounter(counterList);
  };
  return (
    <React.Fragment>
      <CustomizedBadges count={counters.length} />
      {counters.map((counter) => {
        return (
          <Counter
            key={counter._id}
            counter={counter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        );
      })}
      {counters.length > 0 ? (
        <Button onClick={handleReset} variant="contained" color="primary">
          Reset
        </Button>
      ) : null}
    </React.Fragment>
  );
}
