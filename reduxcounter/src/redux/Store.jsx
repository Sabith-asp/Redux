import { createStore } from "redux";
import Reducer from "./Reducer"; // Ensure the correct path to the Reducer

const store = createStore(Reducer);
console.log(store);
store.subscribe(() => console.log("state changed", store.getState().count));
store.subscribe(() =>
  console.log("state changed confirm", store.getState().count)
);
export default store;
