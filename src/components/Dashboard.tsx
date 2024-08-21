

export default function Dashboard() {
  
  return (
    <div className="p-4 sm:ml-64 bg-gray-50 h-screen">
      <div className="p-4 mt-14">

        {/* Três primeiros cards */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center h-24 ps-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100   flex items-center justify-center me-3 ">
                <svg
                  className="w-6 h-6 text-blue-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
              </div>
              <div>
                <h5 className="leading-none text-2xl font-bold text-gray-900 ">
                  150
                </h5>
                <p className="text-sm font-normal text-gray-500 ">
                  questões geradas
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center h-24 ps-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100   flex items-center justify-center me-3">
                <svg
                  className="w-6 h-6 text-blue-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
              </div>
              <div>
                <h5 className="leading-none text-2xl font-bold text-gray-900  ">
                  10
                </h5>
                <p className="text-sm font-normal text-gray-500  ">
                  provas geradas
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center h-24 ps-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100   flex items-center justify-center me-3">
                <svg
                  className="w-6 h-6 text-blue-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
              </div>
              <div>
                <h5 className="leading-none text-2xl font-bold text-gray-900  ">
                  120
                </h5>
                <p className="text-sm font-normal text-gray-500  ">
                  questões aprovadas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card de notificações */}
        <div className=" mx-auto">
          <div className=" bg-white border border-gray-200 rounded-lg p-8 md:p-10 mb-4">
            <ol className="relative border-s border-gray-200">
              <li className="mb-8 ms-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-gray-900  ">
                  Questão aprovada{" "}
                </h3>
                <time className="block mb-2 text-xs font-normal leading-none text-gray-400  ">
                  23 de junho de 2024
                </time>
                <p className="mb-4 text-sm font-normal text-gray-500  ">
                  Sua questão número 23 de nome "Engenharia de software 3" na disciplina de "Gerenciamento e Gestão de Projetos" foi aprovada.
                </p>
              </li>
              <li className="mb-8 ms-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-gray-900  ">
                  Questão reprovada{" "}
                </h3>
                <time className="block mb-2 text-xs font-normal leading-none text-gray-400  ">
                  23 de junho de 2024
                </time>
                <p className="mb-4 text-sm font-normal text-gray-500  ">
                  Sua questão número 25 de nome "Engenharia de software 3" na disciplina de "Gerenciamento e Gestão de Projetos" foi reprovada.
                </p>
                <a
                  href="/questoes-reprovadas"
                  className="inline-flex items-center px-4 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
                >
                  Corrigir
                </a>
              </li>
              <li className="ms-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-gray-900  ">
                  Questão aprovada{" "}
                </h3>
                <time className="block mb-2 text-xs font-normal leading-none text-gray-400  ">
                  23 de junho de 2024
                </time>
                <p className="mb-4 text-sm font-normal text-gray-500  ">
                  Sua questão número 23 de nome "Engenharia de software 3" na disciplina de "Gerenciamento e Gestão de Projetos" foi aprovada.
                </p>
              </li>
            </ol>
          </div>

          {/* Dois últimos cards de dicas */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className=" bg-white  border border-gray-200 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Criação
              </a>
              <h2 className="text-gray-900   text-1xl font-extrabold mb-1 mt-1">
                Você sabia?
              </h2>
              <p className="text-sm font-normal text-gray-500   mb-4">
              Você pode gerar uma prova PDF agora mesmo com apenas alguns cliques, economizando tempo e garantindo um formato profissional e padronizado.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium text-sm inline-flex items-center"
              >
                Gerar
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className=" bg-white  border border-gray-200 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md     mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Questões
              </a>
              <h2 className="text-gray-900   text-1xl font-extrabold mb-2">
                Banco de questões
              </h2>
              <p className="text-sm font-normal text-gray-500   mb-4">
                Você pode ver todas as questões já aprovadas agora mesmo.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium text-sm inline-flex items-center"
              >
                Ver questões
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
