import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import TabelaBancoQuestoes from "../../components/TabelaBancoQuestoes";

export default function Aprovadas() {

  const questoes = [
    {
      id: 1,
      enunciado: "Segundo o Código de Ética Médica, ditado pela Resolução CFM nº 2.217/2018, modificada pelas Resoluções CFM nº 2.222/2018 e 2.226/2019, é vedado ao médico ",
      curso: "Curso A",
      disciplina: "Disciplina X",
      discursiva: "false",
      dificuldade: "Fácil",
      aprovada: true,
      alternativas: [
        { letra: "A", texto: "Esta é a alternativa A.", correta: false },
        { letra: "B", texto: "Esta é a alternativa B.", correta: false },
        { letra: "C", texto: "Esta é a alternativa correta C.", correta: true },
        { letra: "D", texto: "Esta é a alternativa D.", correta: false },
        { letra: "E", texto: "Esta é a alternativa E.", correta: false },
      ],
    },
    {
      id: 2,
      enunciado: "Dentre as alternativas a se...",
      curso: "Curso B",
      disciplina: "Disciplina Y",
      discursiva: false,
      dificuldade: "Média",
      aprovada: true,
      alternativas: [
        { letra: "A", texto: "Outra alternativa A.", correta: false },
        { letra: "B", texto: "Outra alternativa B.", correta: false },
        { letra: "C", texto: "Outra alternativa C.", correta: true },
        { letra: "D", texto: "Outra alternativa D.", correta: false },
        { letra: "E", texto: "Outra alternativa E.", correta: false },
      ],
    },
    {
      id: 3,
      enunciado: "Dentre as alternativas a se...",
      curso: "Curso B",
      disciplina: "Disciplina Y",
      discursiva: true,
      dificuldade: "Média",
      aprovada: true,
      gabarito: "Aqui ficará a resposta correta" 
    },
  ];

  return (
    <main className="bg-gray-100 h-screen">
      <SideBar />
      <NavBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 flex-column">
          <div className="w-full">
            <h3 className="flex items-center mb-3 font-semibold text-gray-900">
              Questões aprovadas
            </h3>

            {/* Cabecalho */}
            <TabelaBancoQuestoes questoes={questoes}/>
          </div>
        </div>
      </div>
    </main>
  );
}
