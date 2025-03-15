import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "../pages/Feed.tsx";
import Analytics from "../pages/Analytics.tsx";
import Settings from "../pages/Settings.tsx";
import Login from "../pages/auth/Login.tsx";
import Signup from "../pages/auth/Signup.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/feed" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;