
interface LoginForm {
  title: string;
  description: string;
}

export default function LoginForm(props: LoginForm) {

  return (
    <div className="flex h-screen">
      {/* Parte da esquerda */}
      <div className="flex items-center justify-center flex-1">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-left text-3xl text-gray-900 font-bold">
              Login
            </h2>
            <p className="mt-2">Utilize suas credenciais para acessar sua conta.</p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-900 focus:border-teal-900 focus:z-10 sm:text-sm"
                placeholder="E-mail"
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-900 focus:border-teal-900 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-900 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-900"
              >
                Entrar
              </button>
            </div>
            <div className="flex items-center justify-center flex-col gap-6">
              <p className="text-xs text-teal-900">OU</p>
              <p>Não tem uma conta? <span className="text-teal-900 font-bold">Cadastrar-se</span></p>
              <img
                src="/public/assets/images/logoUnifae.png"
                alt="Logo Unifae"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Parte da direita */}
      <div className="flex-1">
        <img
          src="/public/assets/images/HeroImage.jpg"
          alt="Imagem de fundo"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>
    </div>
  );
};
