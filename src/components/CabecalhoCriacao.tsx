import React, { useState } from "react";
import CampoAberto from "./CampoAberto";
import MultiplaEscolha from "./MultiplaEscolha";

export default function CabecalhoCriacao({ correcao }: any) {
  const [keywords, setKeywords] = useState<any>([]);
  const [inputValue, setInputValue] = useState<any>("");
  const [tipoQuestao, setTipoQuestao] = useState<any>(""); // Estado para armazenar o tipo de questão selecionado

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleTipoQuestaoChange = (event: any) => {
    setTipoQuestao(event.target.value);
  };

  return (
    <div className="w-full">
      {correcao ? (
        <h3 className="flex items-center mb-3 text- font-semibold text-gray-900">
          Editar questão
        </h3>
      ) : (
        <h3 className="flex items-center mb-3 text- font-semibold text-gray-900">
          Criar questão
        </h3>
      )}

      <div className="">
        <div className=" bg-white border border-gray-200 rounded-lg p-8 md:p-8 mb-4">
          <form className="flex-column" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-10">
              {/* Tipo de questão */}
              <div className="flex-column w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Tipo de questão
                </label>
                <select
                  className="text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={tipoQuestao}
                  onChange={handleTipoQuestaoChange}
                >
                  <option value="ME">Múltipla escolha</option>
                  <option value="DISS">Dissertativa</option>
                </select>
              </div>

              {/* Dificuldade */}
              <div className="flex-column w-full">
                <label className="block mb-4 text-sm font-medium text-gray-900">
                  Dificuldade
                </label>
                <div className="flex">
                  <div className="flex items-center me-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value="fácil"
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label className="ms-2 text-xs font-medium text-gray-90">
                      Fácil
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value="médio"
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label className="ms-2 text-xs font-medium text-gray-900">
                      Médio
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="inline-checked-radio"
                      type="radio"
                      value="difícil"
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label className="ms-2 text-xs font-medium text-gray-900">
                      Difícil
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Palavras-Chave */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-900">
                Palavras-Chave
              </label>
              <p className="block mb-2 text-xs font-normal text-gray-600">
                Escreva aqui os temas da questão.
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Digite uma palavra-chave e pressione enter"
                className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
              />
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword: any, index: any) => (
                  <div
                    key={index}
                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4"
                  >
                    {keyword}
                  </div>
                ))}
              </div>
            </div>

            {/* Condicionalmente renderiza CampoAberto ou MultiplaEscolha */}
            {tipoQuestao === "DISS" ? <CampoAberto /> : <MultiplaEscolha />}
          </form>
        </div>
      </div>
    </div>
  );
}
