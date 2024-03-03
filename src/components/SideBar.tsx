import {
  FiCheckCircle,
  FiFileMinus,
  FiFileText,
  FiHome,
  FiLogOut,
  FiPlusCircle,
  FiSettings,
} from "react-icons/fi";

export default function SideBar() {
  return (
    <div>
      <aside
        className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
        aria-expanded="false"
      >
        <div className="h-19">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
            sidenav-close
          ></i>
          <a
            className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
            href="/"
          >
            <img
              src="../assets/img/logo-ct-dark.png"
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
              alt="main_logo"
            />
            <img
              src="../../public/assets/images/logo.png"
              className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
              alt="main_logo"
            />
          </a>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <FiHome />
                </span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/criacao"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <FiPlusCircle />
                </span>
                <span>Criação</span>
              </a>
            </li>
            <li>
              <a
                href="/prova-online"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <FiFileText />
                </span>
                <span>Prova Online</span>
              </a>
            </li>
            <li>
              <a
                href="/processamento"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <FiFileMinus />
                </span>
                <span>Processamento</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className=" text-gray-600">
                  <FiCheckCircle />
                </span>
                <span>Correção</span>
              </a>
            </li>
            <li>
              <a
                href="/configuracoes"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <FiSettings />
                </span>
                <span>Configurações</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <FiLogOut />
                </span>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      </div>
  );
}
