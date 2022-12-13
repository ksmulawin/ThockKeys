import { createSlice } from "@reduxjs/toolkit";

import { PRODUCTS } from '../products';

export const productsSlice = createSlice({
  name: "productList",
  initialState: { value: PRODUCTS },
  reducers: {
   
  },
});

// export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
