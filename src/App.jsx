import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/register.jsx";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx";
import MainLayout from "./layout/main-layout.jsx";
import ProtectedRoute from "./config/protect-route.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />{" "}
        <Route path="home" element={<ProtectedRoute element={Home} />} />{" "}
      </Route>
    </Routes>
  );
}

export default App;
