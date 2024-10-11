import { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import SideBarCoordenador from "../../../components/SideBarCoordenador";
import api from "../../../api/api";
import { toast } from "react-toastify";
import MainLayout from "../../../components/MainLayout";

export default function CriarNovoUsuario() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [fk_id_tipo, setFkIdTipo] = useState<number>(1); 
  const [fk_id_curso, setFkIdCurso] = useState<number | null>(null);
  const [fk_id_disciplina, setFkIdDisciplina] = useState<number | null>(null);
  const [cursos, setCursos] = useState<any>([]);
  const [disciplinas, setDisciplinas] = useState<any[]>([]); 

  // Fetch dos cursos na inicialização do componente
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get("/cursos");
        setCursos(response.data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };
    fetchCursos();
  }, []);

  // Fetch das disciplinas quando um curso for selecionado
  useEffect(() => {
    if (fk_id_curso !== null) {
      const fetchDisciplinas = async () => {
        try {
          const response = await api.get(`/disciplina/${fk_id_curso}`);
          setDisciplinas(response.data);
        } catch (error) {
          console.error("Erro ao buscar disciplinas:", error);
        }
      };

      fetchDisciplinas();
    } else {
      setDisciplinas([]);
    }
  }, [fk_id_curso]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    // Verificação do domínio do e-mail
    if (!email.endsWith('@prof.fae.br')) {
      toast.error("Domínio não aceito.");
      return;
    }
  
    try {
      const response = await api.post("/users", {
        nome,
        email,
        senha,
        telefone,
        fk_id_tipo,
        fk_id_curso,
      }); 
  
      toast.success("Usuário criado com sucesso.");
    } catch (error) {
      toast.error("Erro ao criar usuário.");
      console.error("Erro ao criar usuário:", error);
    }
  };
  

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <h3 className="mb-4 font-semibold text-gray-900">Cadastro de Professor</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid mb-6 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Número de telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="19 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">E-mail institucional</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="john.doe@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="•••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Tipo de Usuário</label>
                  <select
                    id="fk_id_tipo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={fk_id_tipo}
                    onChange={(e) => setFkIdTipo(Number(e.target.value))}
                    required
                  >
                    <option value={1}>Professor</option>
                    <option value={2}>Coordenador</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Curso</label>
                  <select
                    id="fk_id_curso"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={fk_id_curso ?? ""}
                    onChange={(e) => setFkIdCurso(Number(e.target.value))}
                    required
                  >
                    <option value="">Selecione um curso</option>
                    {cursos.map((curso: any) => (
                      <option key={curso.id_curso} value={curso.id_curso}>
                        {curso.descricao}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
