// src/components/Dashboard.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../store/authActions";
import { Container, Typography, Button } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      {user ? (
        <>
          <Typography variant="body1">
            Welcome, {user.displayName || user.email}!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            style={{ marginTop: "1rem" }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Typography variant="body1">You are not logged in.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;
