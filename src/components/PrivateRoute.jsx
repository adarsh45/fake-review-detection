import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
