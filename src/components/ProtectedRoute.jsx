import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import your auth context or hook

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Use your auth context or hook

  if (!user) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" />;
  }

  return children;
};
