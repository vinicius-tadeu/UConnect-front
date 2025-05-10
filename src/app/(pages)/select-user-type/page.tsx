'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SelectUserTypePage() {

  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-4">
      <Image
        src="/logo-uconnect.png"
        alt="UConnect Logo"
        width={220}
        height={220}
        className="mb-6"
      />
      <h1 className="text-xl font-bold text-blue-200 mb-2">Seja bem-vindo(a)!</h1>
      <p className="text-gray-200 mb-6">Escolha como gostaria de logar:</p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button onClick={()=>{router.push('/login-student')}} className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-100 cursor-pointer">
          Aluno(a)
        </button>
        <button onClick={()=>{router.push('/login-teacher')}} className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-100 cursor-pointer">
          Professores
        </button>
        <button onClick={()=>{router.push('/login-coordination')}} className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer">
          Coordenação
        </button>
      </div>
    </div>
  );
}