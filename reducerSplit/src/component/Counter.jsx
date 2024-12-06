import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counts = useSelector((state) => state.count);
  console.log(counts);
  console.log("counter rendered");

  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {counts}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
