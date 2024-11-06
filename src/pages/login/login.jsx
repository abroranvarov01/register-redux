import React from "react";
import Loginform from "../../components/login-form";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Login = () => {
  return (
    <Container>
      <div>
        <h1>Login</h1>
        <Loginform />
        <p></p>
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </Container>
  );
};

export default Login;
