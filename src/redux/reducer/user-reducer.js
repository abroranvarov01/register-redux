import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    user: null,
  },
  reducers: {
    createUser: (_, action) => {
      return { ...action.payload };
    },
    removeUser: () => {
      return {
        accessToken: null,
        user: null,
      };
    },
  },
});

export default userReducer.reducer;
export const { createUser, removeUser } = userReducer.actions;
