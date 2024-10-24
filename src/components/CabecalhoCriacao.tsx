import React, { useState } from "react";
import CampoAberto from "./CampoAberto";
import MultiplaEscolha from "./MultiplaEscolha";
import { useAuth } from "../contexts/auth";

export default function CabecalhoCriacao({ correcao }: any) {
  const { token } = useAuth(); 
  const user = JSON.parse(sessionStorage.getItem('@App:user') || '{}');
  const [keywords, setKeywords] = useState<any>([]);
  const [inputValue, setInputValue] = useState<any>("");
  const [tipoQuestao, setTipoQuestao] = useState<any>("");

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

  const handleRemoveKeyword = (indexToRemove: number) => {
    const newKeywords = keywords.filter((_: any, index: number) => index !== indexToRemove);
    setKeywords(newKeywords);
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

      <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8 mb-4">
        <form className="flex-column">
          <div className="flex justify-between gap-10">
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
            <div className="flex-column w-full">
            </div>
          </div>

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
                  className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center mb-4"
                >
                  {keyword}
                  <button
                    type="button"
                    className="ml-2 text-white bg-red-500 hover:bg-red-700 rounded-full px-1"
                    onClick={() => handleRemoveKeyword(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {tipoQuestao === "DISS" ? (
            <CampoAberto 
              token={token} 
              userId={user?.id_usuario} 
              keywords={keywords}
              fk_id_curso={user?.fk_id_curso.id_curso}
            />
          ) : (
            <MultiplaEscolha 
              token={token} 
              userId={user?.id_usuario} 
              keywords={keywords}
              fk_id_curso={user?.fk_id_curso.id_curso}
            />
          )}
        </form>
      </div>
    </div>
  );
}
