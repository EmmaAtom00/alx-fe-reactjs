import { Navigate } from 'react-router-dom';

// Simple hook to simulate authentication
const useAuth = () => {
  // In a real app, this would check a token or context
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
};

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
