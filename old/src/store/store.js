import { configureStore } from "@reduxjs/toolkit";
import { couterReducer } from "./slices/couter";
import { authReducer } from "./slices/user";
import { uiReducer } from "./slices/ui-slice";
import { cartReducer } from "./slices/cart-slice";
import { postsReducer as posts } from "./slices/postsSlice";
import { headerReducer } from "../features/header/header-slice";
// const couterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increce":
//       return { ...state, counter: state.counter + 1 };
//     case "decrece":
//       return { ...state, counter: state.counter - 1 };
//     case "addSum":
//       return { ...state, counter: state.counter + action.payload };
//     case "toggle":
//       return { ...state, isVisible: !state.isVisible };
//     default:
//       return state;
//   }
// };

// export const counterActions = counterSlice.actions;
const store = configureStore({
  reducer: {
    counterReducer: couterReducer,
    authReducer,
    uiReducer,
    cartReducer,
    posts,
    headerReducer,
  },
});
export default store;
