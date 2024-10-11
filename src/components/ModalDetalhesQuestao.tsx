import React from "react";

const ModalDetalhesQuestao = ({ selectedQuestao, setSelectedQuestao }: any) => {
  if (!selectedQuestao) return null;

  console.log(selectedQuestao)
  const renderMultiplaEscolha = () => {
    return selectedQuestao?.respostas.length > 0 ? (
      <div className="space-y-4">
        <div className="text-sm text-gray-900 my-4">
          <strong>{selectedQuestao.questao}</strong>
        </div>
        {selectedQuestao.respostas.map((resposta: any, index: number) => {
          const letra = String.fromCharCode(65 + index); 
          const isCorreta = resposta.correta === "S";
          return (
            <div key={index} className="flex items-center space-x-4">
              <div
                className={`w-6 h-6 border rounded-full flex items-center justify-center ${
                  isCorreta
                    ? "text-white bg-green-600"
                    : "text-gray-400 border-gray-400"
                }`}
              >
                {letra}
              </div>
              <div className="text-gray-900 text-sm">{resposta.resposta}</div>
            </div>
          );
        })}
      </div>
    ) : (
      <p>Nenhuma opção disponível.</p>
    );
  };

  const renderDiscursiva = () => (
    <div>
      <div className="text-sm text-gray-900 my-4">
        <strong>{selectedQuestao.questao}</strong>
      </div>
      <div className="text-sm text-gray-900 mt-4">
        <strong className="text-red-900">Gabarito:</strong> 
        <p>{selectedQuestao.respostas.map((resposta: any) => resposta.resposta)}</p>
      </div>
    </div>
  );

  const renderContent = () => (
    selectedQuestao.tipo == 2 ? renderDiscursiva() : renderMultiplaEscolha()
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-black bg-opacity-50">
      <div className="relative w-full max-w-7xl max-h-full md:max-w-4xl">
        <div className="relative bg-white rounded-lg shadow-lg p-4 md:p-10">
          <button
            onClick={() => setSelectedQuestao(null)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 right-4"
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

          <div className="flex gap-3 text-xs items-center">
            <p className="text-lg font-semibold">Questão {selectedQuestao.id_questao}</p>
            <div className="bg-blue-700 text-white font-semibold py-1 px-2 rounded-md">
              {selectedQuestao.disciplina}
            </div>
            <div className="bg-green-800 text-white font-semibold py-1 px-2 rounded-md">
              {selectedQuestao.dificuldade}
            </div>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ModalDetalhesQuestao;
