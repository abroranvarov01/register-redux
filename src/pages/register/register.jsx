import React from "react";
import { Form, Link } from "react-router-dom";
import RegisterForm from "../../components/register-form";
import { Container } from "@mui/material";

const Register = () => {
  return (
    <div>
      <Container>
        <h1>Register</h1>
        <RegisterForm />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;
