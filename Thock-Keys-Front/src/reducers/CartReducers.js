import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "itemOnCart",
  initialState: { value: {} },
  reducers: {
    addToCart: (state, action) => {
      state.value[action.payload.id] = action.payload;
    },
    updateCart : (state,action) => {
      console.log(action.payload)
      state.value[action.payload.id] = action.payload;
    },
  },
});

export const { addToCart,updateCart } = cartSlice.actions;
export default cartSlice.reducer;
