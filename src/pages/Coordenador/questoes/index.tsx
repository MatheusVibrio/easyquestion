import { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import ModalComentario from "../../../components/Coordenador/ModalComentario";
import SideBarCoordenador from "../../../components/SideBarCoordenador";
import api from "../../../api/api";
import { useAuth } from "../../../contexts/auth";
import { toast } from "react-toastify";
import MainLayout from "../../../components/MainLayout";

export default function QuestoesCoordenador() {
  const [questoes, setQuestoes] = useState<any>([]);
  const [expandedId, setExpandedId] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState<any>(false);
  const [selectedQuestaoId, setSelectedQuestaoId] = useState<any>(null);

  const token = sessionStorage.getItem('@App:token');
  const user = JSON.parse(sessionStorage.getItem('@App:user') || '{}');

  const id_curso =user?.fk_id_curso.id_curso;

  const fetchQuestoes = async () => {
    if(user){
      try {
        const response = await api.get(`/questoes/minhasquestoes/analise/${id_curso}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setQuestoes(response.data); 
        
      } catch (error: any) {
        console.error("Erro ao buscar as questões:", error);
        if (error.response) {
          console.error("Erro inesperado:", error.message);
        }
      }
    }
  };

  useEffect(() => {
    fetchQuestoes();
  }, []); 

  const handleExpand = (id: any) => {
    setExpandedId((prevId: any) => (prevId === id ? null : id));
  };

  const handleAprovar = async (id: any) => {
    try {
      await api.put(
        "/questoes",
        { fg_aprovada: "S", id_questao: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQuestoes(questoes.filter((questao: any) => questao.id_questao !== id));
      toast.success("Questão aprovada com sucesso!");
      fetchQuestoes();
    } catch (error: any) {
      console.error("Erro ao aprovar a questão:", error);
      alert(`Erro ao aprovar: ${error.response?.data?.message || 'Erro desconhecido.'}`);
    }
  };

  const handleRejeitar = (id: any) => {
    setSelectedQuestaoId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedQuestaoId(null);
  };

  const handleModalSubmit = async (comentario: any) => {
    try {
      await api.put('/questoes', {
        fg_aprovada: 'N',
        id_questao: selectedQuestaoId,
        comentario: comentario,
      });
      setQuestoes(questoes.filter((questao: any) => questao.id_questao !== selectedQuestaoId));
      handleModalClose();
    } catch (error: any) {
      console.error("Erro ao rejeitar a questão:", error);
      alert(`Erro ao rejeitar a questão: ${error.message}`);
    }
  };

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <h3 className="mb-4 font-semibold text-gray-900">Questões para aprovação</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8">
            {questoes.map((questao: any) => (
              <div
                key={questao.id_questao}
                className={`mb-4 p-4 border rounded-lg bg-gray-50 cursor-pointer transition-all duration-300 ${
                  expandedId === questao.id_questao ? 'max-h-screen' : 'max-h-24'
                } overflow-hidden`}
                onClick={() => handleExpand(questao.id_questao)}
              >
                <div className="flex-column gap-3 text-xs items-center">
                  <div className="flex gap-3 text-xs items-center">
                    <p className="text-lg font-semibold">Questão {questao.id_questao}</p>
                    <div className="bg-blue-800 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.curso}
                    </div>
                    <div className="bg-blue-700 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.disciplina}
                    </div>
                    <div className="bg-green-800 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.dificuldade}
                    </div>
                  </div>
                  <p className="text-sm my-2">Enunciado: {questao.enunciado}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm font-semibold text-blue-950">{questao.professor}</p>
                </div>
                {expandedId == questao.id_questao && (
                  <div>
                    {questao.gabarito && (
                      <p className="text-sm text-red-900">Gabarito: {questao.gabarito}</p>
                    )}
                    
                    {questao.tipo == 1 && (
                      <div className="mb-3">
                        {questao.respostas.map((alternativa: any, index: any) => (
                          <div key={index} className="flex items-center space-x-4">
                            <div
                              className={`w-6 h-6 my-1 border rounded-full flex items-center justify-center ${
                                alternativa.correta
                                  ? "text-white bg-green-600"
                                  : "text-gray-400 border-gray-400"
                              }`}
                            >
                              {alternativa.letra}
                            </div>
                            <div className="text-gray-900 text-sm">{alternativa.descricao}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {questao.tipo == 2 && (
                      <div className="mb-3">
                        {questao.respostas.map((resposta: any, index: any) => (
                          <p key={index} className="text-gray-900 text-sm">
                            <strong>Resposta:</strong> {resposta.descricao}
                          </p>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2 mt-4">
                      <button
                        className="px-3 text-sm font-bold py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAprovar(questao.id_questao);
                        }}
                      >
                        Aprovar
                      </button>
                      <button
                        className="px-3 text-sm font-bold py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRejeitar(questao.id_questao);
                        }}
                      >
                        Rejeitar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {questoes.length === 0 && (
              <p className="text-gray-600">Não há questões pendentes para aprovação.</p>
            )}
          </div>
        </div>
      </div>

      <ModalComentario
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </MainLayout>
  );
}
