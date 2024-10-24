import React, { useState, useEffect } from "react";
import ModalDetalhesQuestao from "./ModalDetalhesQuestao";
import api from "../api/api";
import { toast } from "react-toastify";

const TabelaBancoQuestoes = ({ onVerClick, questoes, aceitaSelecao, reprovadas, comentario }: any) => {
  const [selectedQuestao, setSelectedQuestao] = useState<any>(null);
  const [selectedQuestoes, setSelectedQuestoes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [questaoToDelete, setQuestaoToDelete] = useState<any>(null);

  useEffect(() => {
    const savedQuestoes = localStorage.getItem("selectedQuestoes");
    if (savedQuestoes) {
      setSelectedQuestoes(JSON.parse(savedQuestoes));
    }
  }, []);

  const fetchQuestaoDetalhes = async (idQuestao: number) => {
    setLoading(true);
    try {
      const response = await api.get(`/questoes/detalhes/${idQuestao}`);
      setSelectedQuestao(response.data);
    } catch (error) {
      console.error("Erro ao buscar detalhes da questão:", error);
      toast.error("Erro ao buscar detalhes da questão.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerClick = (questao: any) => {
    fetchQuestaoDetalhes(questao.id_questao);
  };

  const handleDeleteClick = async () => {
    try {
      await api.delete(`/questoes/${questaoToDelete.id_questao}`);
      
      toast.success("Questão deletada com sucesso!");
      
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Erro ao deletar questão:", error);
      toast.error("Questão vinculada a uma prova. Não é possível excluir.");
    } finally {
      setDeleteModalOpen(false);
    }
  };


  const handleSelectQuestao = (questao: any) => {
    let updatedQuestoes: any[] = [];

    if (selectedQuestoes.some(q => q.id_questao === questao.id_questao)) {
      updatedQuestoes = selectedQuestoes.filter(q => q.id_questao !== questao.id_questao);
    } else {
      updatedQuestoes = [...selectedQuestoes, questao];
    }

    localStorage.setItem("selectedQuestoes", JSON.stringify(updatedQuestoes));
    setSelectedQuestoes(updatedQuestoes);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">Enunciado</th>
            <th scope="col" className="px-6 py-3">Curso</th>
            <th scope="col" className="px-6 py-3">Disciplina</th>
            <th scope="col" className="px-6 py-3">Tipo</th>
            <th scope="col" className="px-6 py-3">Dificuldade</th>
            <th scope="col" className="px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {questoes.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                Nenhuma questão encontrada.
              </td>
            </tr>
          ) : (
            questoes.map((questao: any) => (
              <tr
                key={questao.id_questao}
                className={`cursor-pointer border-b-2 ${((aceitaSelecao.aceitaSelecao == true) && selectedQuestoes.some(q => q.id_questao === questao.id_questao)) ? "border-blue-500 bg-blue-100" : "border-transparent"}
                  ${questao.id_questao % 2 === 0 ? "bg-white" : "bg-gray-50"}
                `}
                onClick={() => handleSelectQuestao(questao)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[300px]"
                  title={questao.enunciado}
                >
                  {questao.enunciado}
                </th>
                <td className="px-6 py-4">{questao.curso}</td>
                <td className="px-6 py-4">{questao.disciplina}</td>
                <td className="px-6 py-4">{questao.tipo}</td>
                <td className="px-6 py-4">{questao.dificuldade}</td>
                <td className="px-6 py-4 flex space-x-2">
                  {(aceitaSelecao.aceitaSelecao === true) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectQuestao(questao);
                      }}
                      className={`px-3 py-1 rounded ${selectedQuestoes.some(q => q.id_questao === questao.id_questao) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                      {selectedQuestoes.some(q => q.id_questao === questao.id_questao) ? "Selecionado" : "Selecionar"}
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVerClick(questao);
                    }}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Ver
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuestaoToDelete(questao);
                      setDeleteModalOpen(true);
                    }}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {loading ? (
        <div>Carregando...</div>
      ) : selectedQuestao ? (
        <ModalDetalhesQuestao
          selectedQuestao={selectedQuestao}
          setSelectedQuestao={setSelectedQuestao}
          reprovadas={reprovadas}
        />
      ) : null}

      {/* Modal de Confirmação de Exclusão */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Confirmação de Exclusão</h2>
            <p className="mb-6">Tem certeza que deseja deletar esta questão?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDeleteClick}
              >
                Deletar
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelaBancoQuestoes;
