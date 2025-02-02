// src/store/authActions.js
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";

// Action Creators
// In your authActions.js, modify the loginSuccess action:
export const loginSuccess = (user) => {
  // Create a plain object with the properties you need:
  const plainUser = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    // add any other required fields
  };
  return {
    type: LOGIN_SUCCESS,
    payload: plainUser,
  };
};

export const logoutSuccess = () => ({
  type: LOGOUT,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

// Async Thunk Action for Google Login
export const googleLogin = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // result.user contains user details
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

// Async Thunk Action for Logout
export const startLogout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutSuccess());
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
