import React from "react";
import { useAuth } from "../context/AuthContext";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ children, ...propieties }) => {
  const { user } = useAuth();

  if (user) {
    return <Route {...propieties}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
