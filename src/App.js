import React from "react";
import Counters from "./components/Counters";
import CustomizedBadges from "./components/ShoppingBatch";

export default function App() {
  return (
    <div>
      <CustomizedBadges />
      <Counters />
    </div>
  );
}
