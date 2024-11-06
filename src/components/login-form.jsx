import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/reducer/user-reducer";
import { useLoginUserMutation } from "../redux/service/user";
import { useNavigate } from "react-router-dom";
import { Button, Stack, TextField } from "@mui/material";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();

  const submit = async (data) => {
    reset();
    loginUser(data)
      .unwrap()
      .then((res) => {
        dispatch(createUser(res));
        navigate("/home", { replace: true });
      });
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
          Login
        </Button>
        {isError && (
          <p style={{ color: "red" }}>Login failed. Please try again.</p>
        )}
      </form>
    </Stack>
  );
};

export default LoginForm;
