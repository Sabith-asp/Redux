import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Counter;
