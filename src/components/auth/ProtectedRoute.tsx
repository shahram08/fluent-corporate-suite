
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ 
  children,
  allowedRoles = ["admin"] 
}: ProtectedRouteProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // In a real app, you would check authentication status from your auth service
    // This is a simplified example for demonstration purposes
    const checkAuth = async () => {
      try {
        // Simulate an API call to check authentication
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // For demo purposes, we'll use localStorage
        const authUser = localStorage.getItem('authUser');
        
        if (authUser) {
          const user = JSON.parse(authUser);
          setIsAuthenticated(true);
          setUserRole(user.role || 'viewer');
        } else {
          setIsAuthenticated(false);
          setUserRole(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Demo: Set admin user on component mount if not present
  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    if (!authUser) {
      // For demo purposes, create a default admin user
      const demoUser = {
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
      };
      localStorage.setItem('authUser', JSON.stringify(demoUser));
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page with return URL
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (userRole && allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // User is authenticated but not authorized
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
