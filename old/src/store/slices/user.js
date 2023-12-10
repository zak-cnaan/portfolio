import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticeted: false,
  userName: 'Zak'
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticeted = true
    },
    logout(state) {
      state.isAuthenticeted = false
    },
  },
});

export default authSlice;
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
