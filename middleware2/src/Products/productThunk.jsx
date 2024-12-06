import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);

      return data;
    } catch (error) {
      return error.message;
    }
  }
);
