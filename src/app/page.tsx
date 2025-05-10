'use client'

import Button from "@/components/Button";
import HomePage from "@/components/HomePage";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex bg-slate-800">
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/logo-uconnect.png"
          alt="Logo UConnect"
          width={320}
          height={320}
          className="rounded-md"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 bg-gray-100">
        <HomePage />

        <div className="flex gap-4 w-full justify-center">
          <Button onClick={() => router.push('/select-user-type')} className="w-32">
            Login
          </Button>
          <Button onClick={() => router.push('/register')} bgColor="bg-gray-500" textColor="text-white" className="w-32">
            Cadastro
          </Button>
        </div>
      </div>
    </div>
  );
}
