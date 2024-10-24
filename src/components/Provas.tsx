import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "../contexts/auth";
import { toast } from "react-toastify"; // Para mensagens de sucesso/erro

// Definindo o tipo para as provas e questões
interface Resposta {
  descricao: string;
  fg_correta: string;
}
interface Questao {
  id_lcto: number;
  ordem: number;
  enunciado: string;
  dificuldade: string;
  respostas: Resposta[];
}

interface ProvaDetalhes {
  prova: string;
  disciplina: string;
  curso: string;
  questoes: Questao[];
}

interface Prova {
  id_prova: number;
  descricao: string;
  disciplina: string;
  curso: string;
  questoes: string;
}

export default function Provas() {
  const [provas, setProvas] = useState<Prova[]>([]);
  const [provaDetalhes, setProvaDetalhes] = useState<ProvaDetalhes | null>(null); // Estado para os detalhes da prova
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle de abertura do modal
  const navigate = useNavigate();
  const { user } = useAuth();

  const fetchProvas = async () => {
    try {
      const response = await api.get(`/provas/${user?.id_usuario}`);
      setProvas(response.data);
    } catch (error) {
      console.error("Erro ao buscar provas:", error);
    }
  };

  const fetchProvaDetalhes = async (id_prova: number) => {
    try {
      const response = await api.get(`/provas/det/${id_prova}`);
      setProvaDetalhes(response.data);
      setIsModalOpen(true); // Abre o modal após carregar os dados
    } catch (error) {
      console.error("Erro ao buscar detalhes da prova:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProvas();
    }
  }, [user]);

  const handleExcluirProva = async (id_prova: number) => {
    try {
      await api.delete(`/provas/${id_prova}`);
      toast.success("Prova excluída com sucesso!");
      setProvas(provas.filter((prova) => prova.id_prova !== id_prova));
    } catch (error) {
      console.error("Erro ao excluir prova:", error);
      toast.error("Erro ao excluir prova");
    }
  };

  const handleVerProva = (id_prova: number) => {
    fetchProvaDetalhes(id_prova); // Buscar os detalhes da prova ao clicar
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProvaDetalhes(null); // Limpa os detalhes ao fechar o modal
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center my-2">
        <h3 className="flex items-center mb-3 font-semibold text-gray-900">
          Provas
        </h3>
        <a
          href="/criar-prova"
          className="font-medium text-white bg-blue-800 px-3 py-1.5 rounded-md text-xs hover:underline"
        >
          Criar nova prova
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Nome</th>
              <th scope="col" className="px-6 py-3">Disciplina</th>
              <th scope="col" className="px-6 py-3">Curso</th>
              <th scope="col" className="px-6 py-3">Questões</th>
              <th scope="col" className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {provas.length > 0 ? (
              provas.map((prova: Prova, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {prova.descricao}
                  </th>
                  <td className="px-6 py-4">{prova.disciplina}</td>
                  <td className="px-6 py-4">{prova.curso}</td>
                  <td className="px-6 py-4">{prova.questoes}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <a
                      href="#"
                      onClick={() => handleVerProva(prova.id_prova)}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Ver
                    </a>
                    <a href="#" className="font-medium text-blue-600 hover:underline">Gerar</a>
                    <a
                      href="#"
                      onClick={() => handleExcluirProva(prova.id_prova)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Excluir
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center">
                  Nenhuma prova encontrada
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%)] max-h-full bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-medium text-gray-900">Detalhes da Prova</h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                {provaDetalhes && (
                  <>
                    <p><strong>Prova:</strong> {provaDetalhes.prova}</p>
                    <p><strong>Disciplina:</strong> {provaDetalhes.disciplina}</p>
                    <p><strong>Curso:</strong> {provaDetalhes.curso}</p>
                    <h3 className="mt-4 font-semibold">Questões:</h3>
                    <ul>
                      {provaDetalhes.questoes.map((questao) => (
                        <li key={questao.id_lcto} className="mb-6 pb-4 border-b border-gray-300 last:border-none">
                          <p><strong>Ordem:</strong> {questao.ordem}</p>
                          <p><strong>Dificuldade:</strong> {questao.dificuldade}</p>
                          <p><strong>Enunciado:</strong> {questao.enunciado}</p>
                          <h4 className="mt-2 font-medium">Respostas:</h4>
                          <ul>
                            {questao.respostas.map((resposta, index) => (
                              <li
                                key={index}
                                className={`p-2 mt-1 rounded-md ${
                                  resposta.fg_correta === "S" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {resposta.descricao}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
