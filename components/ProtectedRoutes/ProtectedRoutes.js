import { Redirect } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";

function ProtectedRoutes({ isLoggedIn, children }) {
  const history = useHistory();

  const path = history.location.pathname;

  return isLoggedIn ? (
    <>{children}</>
  ) : path == "/signup" ? (
    <Redirect to="/signup" />
  ) : path == "/forgot-password" ? (
    <Redirect to="/forgot-password" />
  ) : (
    <Redirect to="/login" />
  );
}

export default ProtectedRoutes;
