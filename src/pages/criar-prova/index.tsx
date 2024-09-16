import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FiltroQuestao from "../../components/FiltroQuestao";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import TabelaQuestoesProva from "../../components/TabelaQuestoesProva";
import TabelaBancoQuestoes from "../../components/TabelaBancoQuestoes";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CriarProva = () => {
  const query = useQuery();
  const tipo = query.get("tipo");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const questoes = [
    {
      id: 1,
      enunciado:
        "Segundo o Código de Ética Médica, ditado pela Resolução CFM nº 2.217/2018, modificada pelas Resoluções CFM nº 2.222/2018 e 2.226/2019, é vedado ao médico ",
      curso: "Curso A",
      disciplina: "Disciplina X",
      tipo: "Tipo 1",
      dificuldade: "Fácil",
      alternativas: [
        { letra: "A", texto: "Esta é a alternativa A.", correta: false },
        { letra: "B", texto: "Esta é a alternativa B.", correta: false },
        { letra: "C", texto: "Esta é a alternativa correta C.", correta: true },
        { letra: "D", texto: "Esta é a alternativa D.", correta: false },
        { letra: "E", texto: "Esta é a alternativa E.", correta: false },
      ],
    },
    {
      id: 2,
      enunciado: "Dentre as alternativas a se...",
      curso: "Curso B",
      disciplina: "Disciplina Y",
      tipo: "Tipo 2",
      dificuldade: "Média",
      alternativas: [
        { letra: "A", texto: "Outra alternativa A.", correta: false },
        { letra: "B", texto: "Outra alternativa B.", correta: false },
        { letra: "C", texto: "Outra alternativa C.", correta: true },
        { letra: "D", texto: "Outra alternativa D.", correta: false },
        { letra: "E", texto: "Outra alternativa E.", correta: false },
      ],
    },
    // Adicionar outras questões conforme necessário
  ];

  return (
    <main className="bg-gray-100 h-screen">
      <SideBar />
      <NavBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 flex-column">
          <div className="w-full">
            {tipo === "edicao" ? (
              <h3 className="flex items-center mb-3 font-semibold text-gray-900">
                Editar prova
              </h3>
            ) : (
              <h3 className="flex items-center mb-3 font-semibold text-gray-900">
                Criar prova
              </h3>
            )}
            {/* Cabecalho */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8 mb-4">
              <div className="flex justify-between">
                <div>
                  <label className="block text-md font-medium text-gray-900">
                    Selecione as questões da prova
                  </label>
                  <p className="block text-xs font-normal text-gray-600 w-auto me-2">
                    Você pode buscar uma questão no banco de questões aprovadas
                    ou criar uma nova questão para aprovação.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Buscar questão
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      navigate(`/criacao`);
                    }}
                    className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Criar questão
                  </button>
                </div>
              </div>
              

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-black bg-opacity-50">
                  <div className="relative w-full max-w-7xl max-h-full md:max-w-4xl">
                    <div className="relative bg-white rounded-lg shadow">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-medium text-gray-900 ">
                          Buscar questão
                        </h3>
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
                      <div className="p-4 md:p-5 space-y-4">
                        <FiltroQuestao />
                        <TabelaBancoQuestoes questoes={questoes} />
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-2"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <TabelaQuestoesProva />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CriarProva;
