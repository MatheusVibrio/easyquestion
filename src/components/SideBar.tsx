import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiFileText,
  FiPlusCircle,
  FiHome,
  FiLogOut,
  FiCheckCircle,
  FiFilePlus,
  FiSettings,
} from "react-icons/fi";
import { useAuth } from '../contexts/auth';

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Logout } = useAuth(); 

  const menuItems = [
    { href: "/", icon: <FiHome />, label: "Home" },
    { href: "/criacao", icon: <FiPlusCircle />, label: "Criação" },
    { href: "/minhas-questoes", icon: <FiFilePlus />, label: "Minhas questões" },
    { href: "/questoes-reprovadas", icon: <FiFileText />, label: "Reprovadas", notification: 3 },
    { href: "/questoes-aprovadas", icon: <FiCheckCircle />, label: "Aprovadas" },
    { href: "/prova-online", icon: <FiFilePlus />, label: "Prova" },
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
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-indigo-950 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-indigo-950 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={item.onClick}
                className={`flex items-center p-2 rounded-lg group ${
                  location.pathname === item.href
                    ? "text-white bg-indigo-700"
                    : "text-white hover:bg-indigo-700 dark:hover:bg-gray-700"
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
