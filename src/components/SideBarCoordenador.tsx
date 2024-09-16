import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiFileText,
  FiHome,
  FiLogOut,
  FiCheckCircle,
  FiSettings,
} from "react-icons/fi";
import { useAuth } from "../contexts/auth";

export default function SideBarCoordenador() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Logout } = useAuth(); 

  const menuItems = [
    { href: "/coordenador/questoes", icon: <FiHome />, label: "Questões" },
    { href: "/coordenador/reprovadas", icon: <FiFileText />, label: "Reprovadas", notification: 3 },
    { href: "/coordenador/aprovadas", icon: <FiCheckCircle />, label: "Aprovadas" },
    { href: "/coordenador/criar-usuario", icon: <FiCheckCircle />, label: "Criar novo usuário" },
    { href: "/configuracoes", icon: <FiSettings />, label: "Configurações" },
    { href: "#", icon: <FiLogOut />, label: "Logout", onClick: handleLogout },
  ];

  function handleLogout() {
    Logout();
    console.log("entrou aqui")
    navigate("/");
  }
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`flex items-center p-2 rounded-lg group ${
                  location.pathname === item.href
                    ? "text-white bg-blue-500"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {item.icon}
                <span className="ms-3">{item.label}</span>
                {item.notification && (
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {item.notification}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
