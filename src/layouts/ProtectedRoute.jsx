import React from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
