import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MultiplaEscolha = ({ userId, keywords, fk_id_curso, selectedQuestao }: any) => {
  const [enunciado, setEnunciado] = useState('');
  const [fkTipo, setFkTipo] = useState(1);
  const [fkDificuldade, setFkDificuldade] = useState(1);  
  const [fkDisciplina, setFkDisciplina] = useState<any>(1);
  const [disciplinas, setDisciplinas] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [correctOption, setCorrectOption] = useState(0);

  const token = sessionStorage.getItem('@App:token'); 
  const user = JSON.parse(sessionStorage.getItem('@App:user') || '{}');

  console.log(selectedQuestao);

  useEffect(() => {
    // Reseta todos os campos quando o componente é montado
    setEnunciado('');
    setFkTipo(1);
    setFkDificuldade(1);
    setFkDisciplina(1);
    setOptions([]);
    setInputValue('');
    setCorrectOption(0);
  }, []);
  
useEffect(() => {
  if (!selectedQuestao) {
    // Reseta os campos caso não haja uma questão selecionada
    setEnunciado('');
    setFkDisciplina(1);
    setFkDificuldade(1);
    setOptions([]);
    setInputValue('');
    setCorrectOption(0);
  } else {
    // Preenche os campos se houver uma questão selecionada
    setEnunciado(selectedQuestao.questao || '');
    setFkDisciplina(selectedQuestao.disciplina || 1);
    
    const dificuldadeText = selectedQuestao.dificuldade?.toLowerCase();
    if (dificuldadeText === 'Fácil') {
      setFkDificuldade(1);
    } else if (dificuldadeText === 'Médio') {
      setFkDificuldade(2);
    } else if (dificuldadeText === 'Difícil') {
      setFkDificuldade(3);
    }

    setOptions(selectedQuestao.respostas || []);
  }
}, [selectedQuestao]);

  
  

  // Função para buscar disciplinas
  useEffect(() => {
    if (user) {
      const fetchDisciplinas = async () => {
        try {
          const response = await api.get(`/disciplina/${fk_id_curso}`);
          setDisciplinas(response.data);
          if (response.data.length > 0) {
            setFkDisciplina(response.data[0].id_disciplina); 
          }
        } catch (error) {
          console.error('Erro ao carregar disciplinas:', error);
        }
      };
      fetchDisciplinas();
    }
  }, [token]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      if (options.length >= 5) {
        toast.error('Você só pode adicionar até 5 alternativas.');
        return;
      }
      setOptions([...options, { text: inputValue, isEditing: false }]);
      setInputValue('');
      event.preventDefault();
    }
  };

  const handleEnunciadoChange = (event: any) => {
    setEnunciado(event.target.value);
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
  
    // Verificar se o número de alternativas está dentro do limite permitido
    if (options.length < 2 || options.length > 5) {
      toast.error('Você deve fornecer entre 2 e 5 alternativas.');
      return;
    }
  
    // Montar os dados para enviar na requisição
    const formDataCorrigir = {
      id_questao: selectedQuestao ? selectedQuestao.id_questao : undefined,
      questao: enunciado,
      fk_id_disciplina: fkDisciplina,
      fk_id_dificuldade: fkDificuldade,
      marcadores: keywords,
      respostas: options.map((option, index) => ({
        resposta: selectedQuestao ? selectedQuestao.resposta : option.text,
        correta: index === correctOption ? "S" : "N"
      }))
    };

    const formDataCriacao = {
      enunciado,
      fk_tipo: 1,
      fk_id_usuario: userId,
      fk_id_dificuldade: fkDificuldade,
      fk_id_disciplina: fkDisciplina,
    };
    console.log(formDataCriacao)
  
  
    try {
      if (selectedQuestao) {
        console.log(formDataCorrigir)
        // Se houver uma questão selecionada, fazer a alteração (PUT)
        await api.put(`/questoes/alterar`, {
          "id_questao": selectedQuestao.id_questao,
          "questao": enunciado,
          "fk_id_disciplina": fkDisciplina,
          "fk_id_dificuldade": fkDificuldade,
          "marcadores": keywords,
          "respostas": options.map((option, index) => ({
            "resposta": selectedQuestao ? selectedQuestao.respostas[index].resposta : option.text,
            "correta": index === correctOption ? "S" : "N"
          }))
        }
        , {
          headers: { Authorization: `Bearer ${token}` }
        });

        toast.success('Questão alterada com sucesso!');
      } else {
        // Caso contrário, criar uma nova questão (POST)
        const questaoResponse = await api.post('/questoes', formDataCriacao, {
          headers: { Authorization: `Bearer ${token}` }
        });
  
        const questaoId = questaoResponse.data.id_questao;
  
        // Enviar as respostas associadas à nova questão
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
  
        // Enviar os marcadores
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
  
        toast.success('Questão cadastrada com sucesso!');

      }

      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error: any) {
      console.error('Erro ao salvar a questão:', error.response || error.message);
      toast.error('Erro ao salvar a questão.');
    }
  };
  

  return (
    <div>
      <div className="mt-4">
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
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-900 my-2">Dificuldade</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value={1}
                checked={fkDificuldade === 1}
                onChange={() => setFkDificuldade(1)}
                className='mr-2'
              /> 
              Fácil
            </label>
            <label>
              <input
                type="radio"
                value={2}
                checked={fkDificuldade === 2}
                onChange={() => setFkDificuldade(2)}
                className='mr-2'
              /> 
              Médio
            </label>
            <label>
              <input
                type="radio"
                value={3}
                checked={fkDificuldade === 3}
                onChange={() => setFkDificuldade(3)}
                className='mr-2'
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
                  {selectedQuestao ? option.resposta : option.text}
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
        className="mt-4 bg-blue-800 text-white px-4 py-2 rounded text-xs "
      >
        Salvar Questão
      </button>
    </div>
  );
};

export default MultiplaEscolha;
