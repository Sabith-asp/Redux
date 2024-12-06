import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/reducers/CounterSlice";

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;
