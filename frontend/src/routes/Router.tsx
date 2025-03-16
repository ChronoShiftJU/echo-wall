import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "../pages/Feed.tsx";
import Analytics from "../pages/Analytics.tsx";
import Settings from "../pages/Settings.tsx";
import Login from "../pages/auth/Login.tsx";
import Signup from "../pages/auth/Signup.tsx";
import Landing from "@/pages/Landing.tsx";
import Features from "@/pages/Features.tsx";
import FAQ from "@/pages/FAQ.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Navigate to="/feed" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;