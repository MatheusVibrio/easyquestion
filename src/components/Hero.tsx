
interface HeroProps {
  title: string;
  description: string;
}

export default function Hero(props: HeroProps) {

  return (
    <div className="flex h-screen">
      {/* Parte da esquerda */}
      <div className="flex items-center justify-center flex-1">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-left text-3xl text-gray-900">
              Login
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="sr-only">
                Usuário
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Usuário"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Parte da direita */}
      <div className="flex-1">
        <img
          src="/public/assets/images/HeroImage.jpg"
          alt="Imagem de fundo"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
