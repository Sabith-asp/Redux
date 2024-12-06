import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./productThunk";

const productSlice = createSlice({
  name: "product",
  initialState: {
    error: "",
    status: "",
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
