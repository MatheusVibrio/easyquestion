import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <main className="bg-gradient-to-t from-blue-800 to-blue-950  h-screen w-full flex justify-center items-center">
      <LoginForm
        title="Login"
        description="Use suas credenciais para acessar sua conta."/>
    </main>
  )
}
