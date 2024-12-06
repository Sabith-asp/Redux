import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../Redux/dataSlice";
import ProductReducer from "../Products/productSlice";

const store = configureStore({
  reducer: {
    data: DataReducer,
    product: ProductReducer,
  },
  devTools: true,
});

export default store;
