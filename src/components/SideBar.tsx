import {
   FiFileText ,
   FiPlusCircle,
   FiHome,
   FiLogOut,
   FiCheckCircle,
   FiFilePlus,
   FiSettings, 
} from "react-icons/fi";

export default function SideBar() {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiHome/>
               <span className="ms-3">Home</span>
            </a>
         </li>
         <li>
            <a href="/criacao" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiPlusCircle />
               <span className="flex-1 ms-3 whitespace-nowrap">Criação</span>
            </a>
         </li>
         <li>
            <a href="/correcao" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiCheckCircle />
               <span className="flex-1 ms-3 whitespace-nowrap">Correção</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="/processamento" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiFileText />
               <span className="flex-1 ms-3 whitespace-nowrap">Processamento</span>
            </a>
         </li>
         <li>
            <a href="/prova-online" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiFilePlus />
               <span className="flex-1 ms-3 whitespace-nowrap">Prova</span>
            </a>
         </li>
         <li>
            <a href="/configuracoes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiSettings/>
               <span className="flex-1 ms-3 whitespace-nowrap">Configurações</span>
            </a>
         </li>
         <li>
            <a href="/login" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FiLogOut/>
               <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
  );
}
