import Intro from "../../components/Intro";
import NavBar from "../../components/NavBar";
import Provas from "../../components/Provas";
import SideBar from "../../components/SideBar";

export default function Configuracoes() {
  return (
    <main className="bg-gray-100 h-screen">
    <SideBar />
    <NavBar />

    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-5">
          <div>
              <button
                type="submit"
                className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center mt-2"
              >
                Alterar senha
              </button>
            </div>
        </div>
      </div>
    </div>
  </main>
  );
}
