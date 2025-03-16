import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed.tsx";
import Analytics from "../pages/Analytics.tsx";
import Settings from "../pages/ProfileSettings.tsx";
import Login from "../pages/auth/Login.tsx";
import Signup from "../pages/auth/Signup.tsx";
import Landing from "@/pages/Landing.tsx";
import Features from "@/pages/Features.tsx";
import FAQ from "@/pages/FAQ.tsx";
import ProfileSettings from "../pages/ProfileSettings.tsx";
import About from "@/pages/About.tsx";
import Terms from "@/pages/Terms.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/settings" element={<ProfileSettings />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;