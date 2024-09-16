import { useState } from "react";
import NavBar from "../../../components/NavBar";
import SideBarCoordenador from "../../../components/SideBarCoordenador";
import { createUser } from "../../../api/requisicoes";
export default function CriarNovoUsuario() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await createUser({
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
      });
      console.log("Usuário criado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <main className="bg-gray-100 h-screen">
      <SideBarCoordenador />
      <NavBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <h3 className="mb-4 font-semibold text-gray-900">Cadastro de Professor</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid mb-6 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Número de telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="19 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">E-mail institucional</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="john.doe@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="•••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
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
