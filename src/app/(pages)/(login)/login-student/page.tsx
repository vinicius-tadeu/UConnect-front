'use client'
import { useRouter } from "next/navigation";

export default function LoginStudent() {
   const router = useRouter();
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     router.push('/panel-student');
  }    

  return (
    <div className="h-full flex items-center justify-center bg-blue-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900">UCONNECT</h1>
          <p className="text-gray-600">Acesse o UConnect!</p>
          <p className="text-gray-600">Preencha as informações abaixo:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="matricula" className="block text-gray-700 font-medium">
              Matrícula:
            </label>
            <input
              type="text"
              id="matricula"
              className="w-full px-3 py-2 border text-gray-800 rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="AA00112233"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700 font-medium">
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              className="w-full px-3 py-2 border text-gray-800 rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="•••••••••"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition cursor-pointer"
            >
              Entrar
            </button>
            <button
              type="button"
              className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition cursor-pointer"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}