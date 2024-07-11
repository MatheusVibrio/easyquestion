import React, { useState } from "react";

export default function FiltroQuestao() {
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
        <form className="flex-column" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-6">
            {/* Questão */}
            <div className="flex-column w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Buscar questão
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Busque a questão desejada"
                className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
              />
            </div>

            {/* Disciplina */}
            <div className="flex-column w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Disciplina
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Busque a disciplina desejada"
                className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
              />
            </div>

            {/* Curso */}
            <div className="flex-column w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Curso
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Busque o curso desejado"
                className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
              />
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

          <div>
            <button
              type="submit"
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-5 py-2.5 text-center mt-2"
            >
              Buscar
            </button>
          </div>
        </form>
  );
}
