import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/reducer/user-reducer";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/service/user";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material"; // Импортируем Typography для вывода сообщений
import { Stack } from "@mui/system";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [registerUser, { isLoading, isError, error }] =
    useRegisterUserMutation();
  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      const res = await registerUser(data).unwrap();
      dispatch(createUser(res));
      reset();
      navigate("/home", { replace: true });
    } catch (err) {
      console.error("Failed to register: ", err);
    }
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
          <Typography color="error" variant="body2">
            Registration failed: {error?.data?.message || "Please try again."}
          </Typography>
        )}
      </form>
    </Stack>
  );
};

export default RegisterForm;
