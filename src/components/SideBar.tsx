
import { FiCheckCircle, FiFileMinus, FiFileText, FiHome, FiLogOut, FiPlusCircle, FiSettings  } from "react-icons/fi";

export default function SideBar() {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-3/12 bg-white rounded p-3 shadow-lg">
            <div className="flex items-center space-x-4 p-2 mb-5">
                <img className="w-48" src="../../public/assets/images/logo.png" alt="Logo"/>
                <div>
                    
                </div>
            </div>
            <ul className="space-y-2 text-sm">
                <li>
                    <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <FiHome />
                        </span>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <FiPlusCircle />
                        </span>
                        <span>Criação</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <FiFileText />
                        </span>
                        <span>Prova Online</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <FiFileMinus />
                        </span>
                        <span>Processamento</span>
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className=" text-gray-600">
                            <FiCheckCircle />
                        </span>
                        <span>Correção</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <FiSettings />
                        </span>
                        <span>Configurações</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span className="text-gray-600">
                            <FiLogOut />
                        </span>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="w-9/12">
            <div className="p-4 text-gray-500">
                Content here...
            </div>
        </div>
    </div>

  );
}
