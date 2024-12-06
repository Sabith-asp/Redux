import { createStore } from "redux";
import rootReducer from "../reducers/rootReducers";

const store = createStore(rootReducer);
console.log(store);

export default store;
