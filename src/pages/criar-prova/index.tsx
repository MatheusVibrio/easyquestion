import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FiltroQuestao from "../../components/FiltroQuestao";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import TabelaQuestoesProva from "../../components/TabelaQuestoesProva";
import MainLayout from "../../components/MainLayout";
import api from "../../api/api";
import { toast } from "react-toastify";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CriarProva = () => {
  const query = useQuery();
  const user = JSON.parse(sessionStorage.getItem('@App:user') || '{}');
  const tipo = query.get("tipo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisciplinaModalOpen, setIsDisciplinaModalOpen] = useState(false);
  const [selectedQuestoes, setSelectedQuestoes] = useState<any>(() => {
    const savedQuestions = localStorage.getItem("selectedQuestoes");
    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });
  
  const [disciplinas, setDisciplinas] = useState([]);
  const [selectedDisciplina, setSelectedDisciplina] = useState<string>("");
  const [descricao, setDescricao] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDisciplinaModal = () => {
    setIsDisciplinaModalOpen(true);
  };

  const closeDisciplinaModal = () => {
    setIsDisciplinaModalOpen(false);
  };

  const navigate = useNavigate();

   const handleEnviar = () => {
    closeModal();
    window.location.reload();
  };

  const handleCriarQuestao = async (event: any) => {
    event.preventDefault();

    if(!selectedDisciplina){
      toast.error("É necessário informar a disciplina da prova");
      return
    }

    if(!descricao){
      toast.error("É necessário informar a descrição da prova");
      return
    }
    
    try {
      const provaResponse = await api.post("/provas", {
        descricao: descricao,
        fk_id_disciplina: selectedDisciplina,
        fk_id_usuario: user.id_usuario 
      });

      const provaId = provaResponse.data.id_prova;

      const questoesParaCadastrar = selectedQuestoes.map((questao: any, index: number) => ({
        ordem: index + 1,
        fk_id_questao: questao.id_questao,
        fk_id_prova: provaId
      }));

      await api.post("/provas/questoes", questoesParaCadastrar);

      localStorage.removeItem("selectedQuestoes");
      
      navigate("/provas");

    } catch (error) {
      console.error("Erro ao cadastrar prova ou questões:", error);
    }
  };

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await api.get(`/disciplina/${user?.fk_id_curso.id_curso}`);
        const disciplinasData = response.data;
        setDisciplinas(disciplinasData);
        
        if (disciplinasData.length > 0) {
          setSelectedDisciplina(disciplinasData[0].id_disciplina); 
        }
      } catch (error) {
        console.error("Erro ao buscar disciplinas:", error);
      }
    };

    fetchDisciplinas();
  }, [user?.fk_id_curso.id_curso]);


  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 flex-column">
          <div className="w-full">
            {tipo === "edicao" ? (
              <h3 className="flex items-center mb-3 font-semibold text-gray-900">Editar prova</h3>
            ) : (
              <h3 className="flex items-center mb-3 font-semibold text-gray-900">Criar prova</h3>
            )}
            <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8 mb-4">
              <div className="flex justify-between">
                <div>
                  <label className="block text-md font-medium text-gray-900">Selecione as questões da prova</label>
                  <p className="block text-xs font-normal text-gray-600 w-auto me-2">
                    Você pode buscar uma questão no banco de questões aprovadas ou criar uma nova questão para aprovação.
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

              {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%)] max-h-full bg-black bg-opacity-50">
                  <div className="relative w-full max-w-6xl max-h-full md:max-w-full">
                    <div className="relative bg-white rounded-lg shadow">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-medium text-gray-900">Buscar questão</h3>
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
                        <FiltroQuestao aceitaSelecao={true} setSelectedQuestoes={setSelectedQuestoes} />
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={handleEnviar}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-2"
                          >
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isDisciplinaModalOpen && (
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%)] max-h-full bg-black bg-opacity-50">
                  <div className="relative w-full max-w-lg">
                    <div className="relative bg-white rounded-lg shadow">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-medium text-gray-900">Detalhes da Prova</h3>
                        <button
                          type="button"
                          onClick={closeDisciplinaModal}
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
                        <div className="mb-4">
                          <label htmlFor="disciplina" className="block text-sm font-medium text-gray-700">
                            Selecione a disciplina
                          </label>
                           <select
                            id="disciplina"
                            value={selectedDisciplina}
                            onChange={(e) => setSelectedDisciplina(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="" disabled>
                              Selecione uma disciplina
                            </option>
                            {disciplinas.map((disciplina: any) => (
                              <option key={disciplina.id_disciplina} value={disciplina.id_disciplina}>
                                {disciplina.descricao}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                            Descrição
                          </label>
                          <input
                            type="text"
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              closeDisciplinaModal();
                              handleCriarQuestao(new Event('submit'));
                            }}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-2"
                          >
                            Criar Prova
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
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                openDisciplinaModal();
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-2"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CriarProva;
