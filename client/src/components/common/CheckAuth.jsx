import React from "react";
import { Navigate, useLocation } from "react-router";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  )
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shopping/home" />;
    }
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shopping")
  ) {
    return <Navigate to="/admin" />;
  }

  return <>{children}</>;
};

export default CheckAuth;
