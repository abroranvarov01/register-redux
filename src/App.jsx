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
        <Route index element={<Login />} /> {/* Стартовая страница / */}
        <Route path="register" element={<Register />} />{" "}
        {/* Страница регистрации */}
        <Route path="home" element={<ProtectedRoute element={Home} />} />{" "}
        {/* Защищенная страница Home */}
      </Route>
    </Routes>
  );
}

export default App;
