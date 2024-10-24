import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../contexts/auth";

interface ProtectedRouteProps {
  allowedRoles: string[]; // Tipos permitidos: "Coordenador", "Professor", etc.
  redirectTo: string; 
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, redirectTo }) => {
  const userRole = Cookies.get("fk_id_tipo_descricao");

  const { signed } = useAuth();

  //if (!signed) {
    //return <Navigate to="/login" />;
  //}

  if (userRole && allowedRoles.includes(userRole)) {
    return <Outlet />;
  }

  if (redirectTo === "/login" && userRole) {
    return <Navigate to="/" />;
  }

  return <Navigate to={redirectTo} />;
};



export default ProtectedRoute;
