import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isVisible: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increce(state) {
      state.counter++;
    },
    decrece(state) {
      state.counter--;
    },
    addSum(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export default counterSlice;
export const couterReducer = counterSlice.reducer;
export const couterActions = counterSlice.actions;
