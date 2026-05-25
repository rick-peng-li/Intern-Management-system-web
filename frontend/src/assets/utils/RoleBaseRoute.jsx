import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const RoleBaseRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading....</div>;
  }

  // If user is not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If role is not allowed
  if (!requiredRole.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleBaseRoute;