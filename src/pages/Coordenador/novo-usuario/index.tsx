import { useState } from "react";
import NavBar from "../../../components/NavBar";
import SideBar from "../../../components/SideBar";
import SideBarCoordenador from "../../../components/SideBarCoordenador";

export default function CriarNovoUsuario() {
  const [nome, setNome] = useState<any>("");
  const [ra, setRa] = useState<any>("");
  const [cursos, setCursos] = useState<any>([]);
  const [email, setEmail] = useState<any>("");
  const [telefone, setTelefone] = useState<any>("");
  const [departamento, setDepartamento] = useState<any>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const novoProfessor = {
      nome,
      ra,
      cursos,
      email,
      telefone,
      departamento,
    };
    console.log("Novo professor cadastrado:", novoProfessor);
    // Lógica para salvar o professor no banco de dados
  };

  return (
    <main className="bg-gray-100 h-screen">
      <SideBarCoordenador />
      <NavBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <h3 className="mb-4 font-semibold text-gray-900">
            Cadastro de Professor
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8">
            <form>
              <div className="grid mb-6 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Curso
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Flowbite"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Número de telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="19 99999-9999"
                    pattern="[0-9][0-9]-[0-9]{3}"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  E-mail institucional
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
