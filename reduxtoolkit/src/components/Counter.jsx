import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementbyfive,
} from "../redux/reducers/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <button onClick={() => dispatch(incrementbyfive(5))}>increment 5</button>
    </div>
  );
};

export default Counter;
