import React from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const UnProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  return <>{!isLoggedIn ? children : <Navigate to="/dashboard" />}</>;
};

export default UnProtectedRoute;
