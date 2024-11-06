import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element: Component }) => {
  const { accessToken } = useSelector((state) => state.user);
  return accessToken ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
