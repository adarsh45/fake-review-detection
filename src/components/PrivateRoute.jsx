import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = true;
    setIsAuthenticated(isLoggedIn);
  }, []);

  return isAuthenticated ? <div>{children}</div> : <Navigate to="/login" />;
};

export default PrivateRoute;
