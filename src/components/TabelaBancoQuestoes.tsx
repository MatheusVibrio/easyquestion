import React, { useState } from "react";
import ModalDetalhesQuestao from "./ModalDetalhesQuestao";
import ModalCorrigirQuestao from "./ModalCorrigirQuestao";


const TabelaBancoQuestoes = ({ onVerClick, questoes }: any) => {
  const [selectedQuestao, setSelectedQuestao] = useState<any>(null);

  const handleVerClick = (questao: any) => {
    setSelectedQuestao(questao);
    onVerClick(questao);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Enunciado
            </th>
            <th scope="col" className="px-6 py-3">
              Curso
            </th>
            <th scope="col" className="px-6 py-3">
              Disciplina
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo
            </th>
            <th scope="col" className="px-6 py-3">
              Dificuldade
            </th>
            <th scope="col" className="px-6 py-3">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {questoes.map((questao: any) => (
            <tr
              key={questao.id}
              onClick={() => handleVerClick(questao)}
              className={`cursor-pointer ${
                questao.id % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
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
                    handleVerClick(questao);
                  }}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detalhes da Questão Modal */}
      {(selectedQuestao && selectedQuestao.aprovada == true) ?
        <ModalDetalhesQuestao selectedQuestao={selectedQuestao} setSelectedQuestao={setSelectedQuestao} />
       : <ModalCorrigirQuestao selectedQuestao={selectedQuestao} setSelectedQuestao={setSelectedQuestao}/> }
    </div>
  );
};

export default TabelaBancoQuestoes;
