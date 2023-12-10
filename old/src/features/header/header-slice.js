import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/posts", text: "Posts" },
  ],
  isTopMenuOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggle_isTopMenuOpen(state) {
      state.isTopMenuOpen = !state.isTopMenuOpen;
    },
  },
});

// export default headerSlice;
export const headerReducer = headerSlice.reducer;
export const headerActions = headerSlice.actions;
