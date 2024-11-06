import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/reducer/user-reducer";
import { useLoginUserMutation } from "../redux/service/user";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/service/user";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const submit = (data) => {
    reset();
    const res = registerUser(data).unwrap();
    dispatch(createUser(res));
    navigate("/home", { replace: true });
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit(submit)}>
        <TextField
          fullWidth
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <TextField
          margin="normal"
          fullWidth
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          disabled={isLoading}
        >
          Register
        </Button>
        {isError && (
          <p style={{ color: "red" }}>Registration failed. Please try again.</p>
        )}
      </form>
    </Stack>
  );
};

export default RegisterForm;
