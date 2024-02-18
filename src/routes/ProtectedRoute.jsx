import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };