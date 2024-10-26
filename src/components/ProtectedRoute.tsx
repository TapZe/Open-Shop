import { Navigate } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";
import { ProtectedRouteProps } from "../types/generalTypes";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  return useAuthCheck() ? (
    <>
      {element} {/* Render the protected component if authenticated */}
    </>
  ) : (
    <Navigate to="/auth/login" /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoute;
