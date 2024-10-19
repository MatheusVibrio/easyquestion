import React, { useEffect, useState } from "react";
import ModalDetalhesQuestao from "./ModalDetalhesQuestao";

const TabelaQuestoesProva = () => {
  const [questoes, setQuestoes] = useState([]);
  const [selectedQuestao, setSelectedQuestao] = useState(null);

  useEffect(() => {
    const storedQuestoes = localStorage.getItem("selectedQuestoes");
    if (storedQuestoes) {
      const questoesSelecionadas = JSON.parse(storedQuestoes);
      setQuestoes(questoesSelecionadas);
    }
  }, []);

  const handleVerClick = (questao: any) => {
    console.log("Questao selecionada:", questao); // Verifique o valor da questão
    setSelectedQuestao(questao);
  };

  const handleExcluir = (idQuestao: any) => {
    const questoesAtualizadas = questoes.filter((questao: any) => questao.id_questao !== idQuestao);
    setQuestoes(questoesAtualizadas);
    localStorage.setItem("selectedQuestoes", JSON.stringify(questoesAtualizadas));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">Ordem</th>
            <th scope="col" className="px-6 py-3">Enunciado</th>
            <th scope="col" className="px-6 py-3">Dificuldade</th>
            <th scope="col" className="px-6 py-3">Curso</th>
            <th scope="col" className="px-6 py-3">Disciplina</th>
            <th scope="col" className="px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {questoes.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                Nenhuma questão selecionada.
              </td>
            </tr>
          ) : (
            questoes.map((questao: any, index: any) => (
              <tr key={questao.id_questao} className="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="px-6 py-4">{questao.enunciado}</td>
                <td className="px-6 py-4">{questao.dificuldade || "Não especificado"}</td>
                <td className="px-6 py-4">{questao.curso}</td>
                <td className="px-6 py-4">{questao.disciplina}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleVerClick(questao)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => handleExcluir(questao.id_questao)}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {selectedQuestao && (
        <ModalDetalhesQuestao
          selectedQuestao={selectedQuestao}
          setSelectedQuestao={setSelectedQuestao}
          reprovadas={false}
        />
      )}
    </div>
  );
};

export default TabelaQuestoesProva;
