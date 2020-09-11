import React from "react";
import Counters from "./components/Counters";

export default function App() {
  const getCounter = (count) => {};
  return (
    <div>
      <Counters getCounter={getCounter} />
    </div>
  );
}
