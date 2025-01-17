import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiFileText,
  FiPlusCircle,
  FiHome,
  FiLogOut,
  FiCheckCircle,
  FiFilePlus,
  FiList ,
  FiXSquare ,
} from "react-icons/fi";
import { useAuth } from '../contexts/auth';

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Logout } = useAuth(); 

  const menuItems = [
    { href: "/", icon: <FiHome />, label: "Home" },
    { href: "/criacao", icon: <FiPlusCircle />, label: "Criação" },
    { href: "/minhas-questoes", icon: <FiList  />, label: "Minhas questões" },
    { href: "/questoes-reprovadas", icon: <FiXSquare  />, label: "Reprovadas" },
    { href: "/questoes-aprovadas", icon: <FiCheckCircle />, label: "Aprovadas" },
    { href: "/provas", icon: <FiFilePlus />, label: "Prova" },
    { href: "/login", icon: <FiLogOut />, label: "Logout", onClick: handleLogout },
  ];

  function handleLogout() {
    Logout();
    navigate("/login");
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
