import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Define a PrivateRoute component that checks if the user is authenticated
const PrivateRoute = ({ element, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
