import { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import ModalComentario from "../../../components/Coordenador/ModalComentario";
import SideBarCoordenador from "../../../components/SideBarCoordenador";
import api from "../../../api/api";
import { useAuth } from "../../../contexts/auth";
import MainLayout from "../../../components/MainLayout";

export default function ReprovadasCoordenador() {
  const [questoes, setQuestoes] = useState<any>([]);
  const [expandedIds, setExpandedIds] = useState<any>([]);
  const [modalOpen, setModalOpen] = useState<any>(false);
  const [selectedQuestaoId, setSelectedQuestaoId] = useState<any>(null);
  const { user } = useAuth();

  const fetchQuestoesReprovadas = async () => {
    try {
      if (user) {
        const response = await api.get(`/questoes/minhasquestoes/reprovadas/${user.id_usuario}`);
        setQuestoes(response.data); 
      }
      } catch (error) {
      console.error("Erro ao buscar as questões reprovadas:", error);
    }
  };

  useEffect(() => {
    fetchQuestoesReprovadas();
  }, [user]);

  const handleExpand = (id: any) => {
    setExpandedIds((prevExpandedIds: any) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((expandedId: any) => expandedId !== id)
        : [...prevExpandedIds, id]
    );
  };

  const handleAprovar = (id: any) => {
    setQuestoes(questoes.filter((questao: any) => questao.id !== id));
  };

  const handleRejeitar = (id: any) => {
    setSelectedQuestaoId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedQuestaoId(null);
  };

  const handleModalSubmit = (comentario: any) => {
    setQuestoes(questoes.filter((questao: any) => questao.id !== selectedQuestaoId));
    handleModalClose();
  };

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <h3 className="mb-4 font-semibold text-gray-900">Questões reprovadas</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8">
            {questoes.length > 0 ? (
              questoes.map((questao: any) => (
                <div
                  key={questao.id}
                  className={`mb-4 p-4 border rounded-lg bg-red-50 cursor-pointer transition-all duration-300 ${
                    expandedIds.includes(questao.id) ? "max-h-screen" : "max-h-24"
                  } overflow-hidd
        setQuestoes(response.data);`}
                  onClick={() => handleExpand(questao.id)}
                >
                  <div className="flex gap-3 text-xs items-center">
                    <p className="text-lg font-semibold">Questão {questao.id}</p>
                    <div className="bg-blue-800 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.curso}
                    </div>
                    <div className="bg-blue-700 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.disciplina}
                    </div>
                    <div className="bg-blue-900 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.tipo}
                    </div>
                    <div className="bg-green-800 text-white font-semibold py-1 px-2 rounded-md">
                      {questao.dificuldade}
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-semibold text-blue-950">{questao.professor}</p>
                  </div>
                  {expandedIds.includes(questao.id) && (
                    <div>
                      <p className="text-sm mb-2">Enunciado: {questao.enunciado}</p>
                      {questao.gabarito && (
                        <p className="text-sm text-red-900">Gabarito: {questao.gabarito}</p>
                      )}
                      {questao.tipo === "Múltipla Escolha" && (
                        <div className="mb-3">
                          {questao.alternativas.map((alternativa: any, index: any) => (
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
                              <div className="text-gray-900 text-sm">{alternativa.texto}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
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
