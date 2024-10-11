import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../contexts/auth';

const MultiplaEscolha = ({ userId, keywords }: any) => {
  const [enunciado, setEnunciado] = useState('');
  const [fkTipo, setFkTipo] = useState(1);
  const [fkDificuldade, setFkDificuldade] = useState(1);  
  const [fkDisciplina, setFkDisciplina] = useState<any>(1);
  const [disciplinas, setDisciplinas] = useState<any[]>([]); // Lista de disciplinas
  const [options, setOptions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [correctOption, setCorrectOption] = useState(0);
  const { user } = useAuth()

  const token = sessionStorage.getItem('@App:token');

  // Função para buscar disciplinas
  useEffect(() => {
    if (user) {
    const fetchDisciplinas = async () => {
     
      try {
        const response = await api.get(`/disciplina/${user.fk_id_curso.id_curso}`);
        console.log(response.data);
        setDisciplinas(response.data);
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error);
      }
    };
    fetchDisciplinas();
  }

  }, [token]);

  const handleEnunciadoChange = (event: any) => {
    setEnunciado(event.target.value);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setOptions([...options, { text: inputValue, isEditing: false }]);
      setInputValue('');
      event.preventDefault();
    }
  };

const handleEditOption = (index: any) => {
  const newOptions = options.map((option, i) => {
    if (i === index) {
      return { ...option, isEditing: true };
    }
    return option;
  });
  setOptions(newOptions);
};


  const handleDeleteOption = (index: any) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSaveOption = (index: any, newText: string) => {
    const newOptions = options.map((option, i) => {
      if (i === index) {
        return { ...option, text: newText, isEditing: false };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleOptionChange = (index: any) => {
    setCorrectOption(index);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = {
      enunciado,
      fk_tipo: fkTipo,
      fk_id_usuario: userId,
      fk_id_dificuldade: fkDificuldade,
      fk_id_disciplina: fkDisciplina,
    };

    try {
      const questaoResponse = await api.post('/questoes', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const questaoId = questaoResponse.data.id_questao;

      for (let index = 0; index < options.length; index++) {
        const option = options[index];
        await api.post(
          "/questoes/respostas",
          {
            descricao: option.text,
            fg_correta: index === correctOption ? "S" : "N",
            fk_id_questao: questaoId,
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
      }

      const marcadores = keywords.map((keyword: string) => ({
        fk_id_questao: questaoId,
        marcador: keyword,
      }));

      await Promise.all(
        marcadores.map((marcador: any) =>
          api.post('/questoes/marcadores', marcador, {
            headers: { Authorization: `Bearer ${token}` },
          })
        )
      );

      toast.success("Questão cadastrada com sucesso!");

    } catch (error: any) {
      if (error.response) {
        console.error('Erro ao criar a questão:', error.response.data);
        alert(`Erro ao criar a questão: ${error.response.data.message || 'Erro desconhecido'}`);
      } else if (error.request) {
        console.error('Nenhuma resposta recebida:', error.request);
        alert('Erro ao criar a questão: Nenhuma resposta do servidor');
      } else {
        console.error('Erro desconhecido ao criar a questão:', error.message);
        alert('Erro desconhecido ao criar a questão.');
      }
    }
  };

  return (
    <div>
      <div className="mt-4">
      {/* Select para disciplinas */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-900">Disciplina</label>
        <select
          value={fkDisciplina}
          onChange={(e) => setFkDisciplina(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
          required
        >
          {disciplinas.map((disciplina: any) => (
            <option key={disciplina.id_disciplina} value={disciplina.id_disciplina}>
              {disciplina.descricao}
            </option>
          ))}
        </select>
      </div>

      {/* Button Radio para dificuldade */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-900 my-2">Dificuldade</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value={1}
                checked={fkDificuldade === 1}
                onChange={() => setFkDificuldade(1)}
              /> 
              Fácil
            </label>
            <label>
              <input
                type="radio"
                value={2}
                checked={fkDificuldade === 2}
                onChange={() => setFkDificuldade(2)}
              /> 
              Médio
            </label>
            <label>
              <input
                type="radio"
                value={3}
                checked={fkDificuldade === 3}
                onChange={() => setFkDificuldade(3)}
              /> 
              Difícil
            </label>
          </div>
        </div>
        <label className="block text-sm mt-4 font-medium text-gray-900">Enunciado</label>
        <textarea
          value={enunciado}
          onChange={handleEnunciadoChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
          placeholder="Escreva o enunciado da questão"
        />
      </div>

      {/* Adicionar opções */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-900">Opções de Resposta</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma opção e pressione enter"
          className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
        />
              <div className="space-y-2">
        {options.map((option: any, index: any) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 py-3 rounded-md px-2 justify-between"
          >
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="options"
                checked={correctOption === index}
                onChange={() => handleOptionChange(index)}
                className={`w-4 h-4 ${
                  correctOption === index ? "text-green-800" : "text-gray-600"
                } bg-gray-100 border-gray-300 focus:ring-blue-500`}
              />
              <div
                className={`w-6 h-6 border rounded-full flex items-center justify-center ${
                  correctOption === index
                    ? "text-white bg-green-600"
                    : "text-gray-400 border-gray-400"
                }`}
              >
                {String.fromCharCode(97 + index).toUpperCase()}
              </div>
              {option.isEditing ? (
                <input
                  type="text"
                  defaultValue={option.text}
                  onBlur={(e) => handleSaveOption(index, e.target.value)}
                  className="ml-2 p-1 border rounded"
                />
              ) : (
                <span
                  className={`text-sm font-semibold ml-2 ${
                    correctOption === index ? "text-green-700" : "text-gray-700"
                  }`}
                >
                  {option.text}
                </span>
              )}
            </div>

            <div>
            <button
              onClick={(event) => {
                event.preventDefault();
                handleEditOption(index);
              }}
              className="ml-2 px-3 py-1 rounded-md bg-blue-600 text-xs text-white font-bold hover:underline"
            >
              Editar
            </button>


              <button
                onClick={() => handleDeleteOption(index)}
                className="ml-2 px-3 py-1 rounded-md text-xs bg-red-600 text-white font-bold hover:underline"
              >
                Apagar
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Salvar Questão
      </button>
    </div>
  );
};

export default MultiplaEscolha;
