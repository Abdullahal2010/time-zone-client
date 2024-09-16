import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./context/UserContext";
import About from "./pages/About";
import FaqPage from "./pages/FaqPage";
import "./App.css";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./layouts/ProtectedRoute";
import UnProtectedRoute from "./layouts/UnProtectedRoute";
import Dashboard from "./pages/Dashboard";
import AddZones from "./pages/AddZones";
import Settings from "./pages/Settings";
import TryOut from "./pages/TryOut";
import DummyDashboard from "./pages/DummyDashboard";
import DumyAddZone from "./pages/DumyAddZone";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={
              <UnProtectedRoute>
                <Home />
              </UnProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/register"
            element={
              <UnProtectedRoute>
                <Register />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <UnProtectedRoute>
                <Login />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-zone"
            element={
              <ProtectedRoute>
                <AddZones />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tryout"
            element={
              <UnProtectedRoute>
                <TryOut />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/dummydashboard"
            element={
              <UnProtectedRoute>
                <DummyDashboard />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/dummy-add-zone"
            element={
              <UnProtectedRoute>
                <DumyAddZone />
              </UnProtectedRoute>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
