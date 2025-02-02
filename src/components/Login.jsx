// src/components/Login.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../store/authActions";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Alert,
  Box,
  Grid,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleGoogleLogin = async () => {
    dispatch(googleLogin());
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                align="center"
                gutterBottom
              >
                Welcome to AGRI ASAP
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                gutterBottom
              >
                Sign in to explore global agricultural practices and join our
                marketplace.
              </Typography>
              {error && (
                <Alert severity="error" sx={{ my: 2 }}>
                  {error}
                </Alert>
              )}
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                size="large"
              >
                Sign in with Google
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
