import React from "react";
import Counter from "./Counter";
const counters = [
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
  return (
    <React.Fragment>
      {counters.map((counter) => {
        return <Counter key={counter._id} counter={counter} />;
      })}
    </React.Fragment>
  );
}
