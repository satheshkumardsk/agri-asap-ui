// src/components/Login.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../store/authActions";
import { Container, Typography, Button, Alert } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Sign In with Google
      </Typography>
      {authState.error && <Alert severity="error">{authState.error}</Alert>}
      <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Sign in with Google
      </Button>
    </Container>
  );
};

export default Login;
