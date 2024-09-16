import React, { useState } from "react";
import ModalDetalhesQuestao from "./ModalDetalhesQuestao";

const questoes = [
  { id: 1, enunciado: "Dentre as alternativas a se...", dificuldade: "Fácil", disciplina: "Engenharia de Software", curso: "Eng. de Software", alternativas: [
    { letra: "A", texto: "Outra alternativa A.", correta: false },
    { letra: "B", texto: "Outra alternativa B.", correta: false },
    { letra: "C", texto: "Outra alternativa C.", correta: true },
    { letra: "D", texto: "Outra alternativa D.", correta: false },
    { letra: "E", texto: "Outra alternativa E.", correta: false },
  ], },
  { id: 2, enunciado: "Dentre as alternativas a se...", dificuldade: "Fácil", disciplina: "Engenharia de Software", curso: "Eng. de Software", alternativas: [
    { letra: "A", texto: "Outra alternativa A.", correta: false },
    { letra: "B", texto: "Outra alternativa B.", correta: false },
    { letra: "C", texto: "Outra alternativa C.", correta: true },
    { letra: "D", texto: "Outra alternativa D.", correta: false },
    { letra: "E", texto: "Outra alternativa E.", correta: false },
  ], },
  { id: 3, enunciado: "Dentre as alternativas a se...", dificuldade: "Fácil", disciplina: "Engenharia de Software", curso: "Eng. de Software", alternativas: [
    { letra: "A", texto: "Outra alternativa A.", correta: false },
    { letra: "B", texto: "Outra alternativa B.", correta: false },
    { letra: "C", texto: "Outra alternativa C.", correta: true },
    { letra: "D", texto: "Outra alternativa D.", correta: false },
    { letra: "E", texto: "Outra alternativa E.", correta: false },
  ], },
  { id: 4, enunciado: "Dentre as alternativas a se...", dificuldade: "Fácil", disciplina: "Engenharia de Software", curso: "Eng. de Software", alternativas: [
    { letra: "A", texto: "Outra alternativa A.", correta: false },
    { letra: "B", texto: "Outra alternativa B.", correta: false },
    { letra: "C", texto: "Outra alternativa C.", correta: true },
    { letra: "D", texto: "Outra alternativa D.", correta: false },
    { letra: "E", texto: "Outra alternativa E.", correta: false },
  ], },
  { id: 5, enunciado: "Dentre as alternativas a se...", dificuldade: "Fácil", disciplina: "Engenharia de Software", curso: "Eng. de Software", alternativas: [
    { letra: "A", texto: "Outra alternativa A.", correta: false },
    { letra: "B", texto: "Outra alternativa B.", correta: false },
    { letra: "C", texto: "Outra alternativa C.", correta: true },
    { letra: "D", texto: "Outra alternativa D.", correta: false },
    { letra: "E", texto: "Outra alternativa E.", correta: false },
  ], },
];

export default function TabelaQuestoesProva() {

  const [selectedQuestao, setSelectedQuestao] = useState<any>(null);

  const handleVerClick = (questao: any) => {
    setSelectedQuestao(questao);
  };
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">Ordem</th>
            <th scope="col" className="px-6 py-3">Enunciado</th>
            <th scope="col" className="px-6 py-3">Dificuldade</th>
            <th scope="col" className="px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {questoes.map((questao, index) => (
            <tr key={questao.id} className="odd:bg-white even:bg-gray-50 border-b"
              onClick={() => handleVerClick(questao)}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                <td className="px-6 py-4">{questao.enunciado}</td>
                <td className="px-6 py-4">{questao.dificuldade}</td>
                <td className="px-6 py-4 flex gap-2">
                  <a href="#" className="font-medium text-red-600 hover:underline">Excluir</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detalhes da Questão Modal */}
      {selectedQuestao && (
        <ModalDetalhesQuestao
          selectedQuestao={selectedQuestao}
          setSelectedQuestao={setSelectedQuestao}
        />
      )}

    </div>
  );
}
