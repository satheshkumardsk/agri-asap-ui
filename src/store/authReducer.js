// src/store/authReducer.js
import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from "./authActions";

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGOUT:
      return { ...state, user: null, error: null };
    case LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
