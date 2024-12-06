import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Redux/dataSlice";
import Products from "./Products/Products";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.count);
  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <Products />
    </>
  );
}

export default App;
