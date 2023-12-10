import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{id:1, name:"111"},{id:2, name:"22"}],
  totalQty: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action){
      const item = action.payload;
      state.items.push(item);
    },
    removeItemFromCart(state, action){
       const itemId = (action.payload);
       state.items = state.items.filter(item => item.id !== itemId)
      //const item = action.payload;
      //state.items.push(item);
    }
  },
});

export default cartSlice;
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
