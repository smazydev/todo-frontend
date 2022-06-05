import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({component}) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (isAuthenticated) {
    return component;
  }

  return <Navigate to="/login" />;
};