import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../redux/dataSlice";

const store = configureStore({
  reducer: {
    products: DataReducer,
  },
});

export default store;
