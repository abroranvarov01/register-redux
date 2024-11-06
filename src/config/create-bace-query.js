import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadState } from "../config/storege";

export const createBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      const token = loadState("user")?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
};
