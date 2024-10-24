import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiFileText,
  FiHome,
  FiLogOut,
  FiCheckCircle,
  FiSettings,
  FiPlusCircle,
} from "react-icons/fi";
import { useAuth } from "../contexts/auth";

export default function SideBarCoordenador() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Logout } = useAuth();

  const menuItems = [
    { href: "/coordenador/questoes", icon: <FiHome />, label: "Questões" },
    { href: "/coordenador/minhas-questoes", icon: <FiHome />, label: "Minhas Questões" },
    { href: "/coordenador/criacao", icon: <FiPlusCircle />, label: "Criação" },
    { href: "/coordenador/criar-usuario", icon: <FiCheckCircle />, label: "Criar novo usuário" },
    { href: "/coordenador/criar-disciplina", icon: <FiPlusCircle />, label: "Criar disciplina" },
    { href: "/coordenador/provas", icon: <FiPlusCircle />, label: "Prova" },
    { href: "", icon: <FiLogOut />, label: "Logout", onClick: handleLogout },
  ];

  function handleLogout(event: any) {
    event.preventDefault();
    Logout(); 
    navigate("/login"); 
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
            <li key={item.label}>
              <a
                href={item.href}
                className={`flex items-center p-2 rounded-lg group ${
                  location.pathname === item.href
                    ? "text-white bg-blue-500"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={item.onClick}
              >
                {item.icon}
                <span className="ms-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
