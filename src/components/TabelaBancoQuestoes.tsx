import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalDetalhesQuestao from "./ModalDetalhesQuestao";
import ModalCorrigirQuestao from "./ModalCorrigirQuestao";
import api from "../api/api";
import { toast } from "react-toastify";

const TabelaBancoQuestoes = ({ onVerClick, questoes }: any) => {
  const [selectedQuestao, setSelectedQuestao] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    fetchQuestaoDetalhes(questao.id_questao); // Passa o ID da questão para buscar detalhes
  };

  const handleDeleteClick = async (idQuestao: number) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar esta questão?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/questoes/${idQuestao}`);
      window.location.reload(); 
      toast.success("Questão deletada com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar questão:", error);
      alert("Erro ao deletar a questão.");
    }
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
                key={questao.id_questao} // Certifique-se de que 'questao.id' é único.
                className={`cursor-pointer ${questao.id % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
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
                <td className="px-6 py-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que o evento se propague para a linha
                      handleVerClick(questao); // Chama a função para buscar detalhes
                    }}
                    className="font-medium text-blue-600 hover:underline mr-2"
                  >
                    Ver
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que o evento se propague para a linha
                      handleDeleteClick(questao.id_questao); // Alterei para `questao.id` 
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

      {/* Modal para mostrar detalhes da questão */}
      {loading ? (
        <div>Carregando...</div> // Exibe um carregando enquanto busca os detalhes
      ) : selectedQuestao ? (
        <ModalDetalhesQuestao
          selectedQuestao={selectedQuestao}
          setSelectedQuestao={setSelectedQuestao}
        />
      ) : null}
    </div>
  );
};

export default TabelaBancoQuestoes;
