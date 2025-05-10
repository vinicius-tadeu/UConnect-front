import Image from "next/image";

export default function SelectUserTypePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-4">
      <Image
        src="/logo-uconnect.png"
        alt="UConnect Logo"
        width={120}
        height={120}
        className="mb-6"
      />
      <h1 className="text-xl font-bold text-blue-700 mb-2">Seja bem-vindo(a)!</h1>
      <p className="text-gray-700 mb-6">Escolha como gostaria de logar:</p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-100">
          Aluno(a)
        </button>
        <button className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-100">
          Professores
        </button>
        <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Coordenação
        </button>
      </div>
    </div>
  );
}