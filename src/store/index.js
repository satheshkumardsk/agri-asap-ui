// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
// redux-thunk is already included by default with configureStore

const store = configureStore({
  reducer: {
    auth: authReducer,
    // add other reducers here
  },
});

export default store;
