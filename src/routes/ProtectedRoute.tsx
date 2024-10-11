import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  allowedRoles: string[]; // Tipos permitidos: "Coordenador", "Professor", etc.
  redirectTo: string; // Rota de redirecionamento
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, redirectTo }) => {
  const userRole = Cookies.get("fk_id_tipo_descricao");

  console.log("Verificando acesso. Papel do usuário:", userRole);
  console.log("Papéis permitidos:", allowedRoles);

  // Verifica se o usuário está logado e se o papel está entre os permitidos
  if (userRole && allowedRoles.includes(userRole)) {
    return <Outlet />;
  }

  // Se o usuário está logado e tenta acessar a página de login, redireciona para a página inicial
  if (redirectTo === "/login" && userRole) {
    return <Navigate to="/" />;
  }

  return <Navigate to={redirectTo} />;
};



export default ProtectedRoute;
