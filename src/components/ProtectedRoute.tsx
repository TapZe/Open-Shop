import { Navigate } from "react-router-dom";
import AuthCheck from "../utils/authCheck";
import { ProtectedRouteProps } from "../types/generalTypes";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  return AuthCheck() ? (
    <>
      {element} {/* Render the protected component if authenticated */}
    </>
  ) : (
    <Navigate to="/auth/login" /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoute;
