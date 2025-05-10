'use client';
import { useState } from 'react';
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PanelStudent() {
  const [activeTab, setActiveTab] = useState('Comunicados');
  const router = useRouter()

  const tabs = ['Comunicados', 'Avisos', 'Vagas'];
  const feedData = [
    {
      name: 'Luciano Martins',
      role: 'Professor(a)',
      message: 'Boa noite alunos(as)!!\nTive um imprevisto, chegarei atrasado! Devo chegar até as 19:00 no máximo, aguardo todos!',
      date: '19 de março, 18:29',
    },
    {
      name: 'Flávia Lorrane',
      role: 'Professor(a)',
      message: 'Boa tarde, turma!\nA aula de amanhã será online, pelo Google Meet, às 19:15. O link será enviado 15 minutos antes. Qualquer dúvida, me avisem!',
      date: '07 de março, 14:23',
    },
    // ...additional feed items...
  ];

  return (
    <div className="min-h-screen h-full bg-[url(/bg-panel.jpg)] text-white">
      <div className="flex justify-end items-center p-4 bg-gray-800 shadow-md">
        <div className="flex items-center space-x-8">
          <h2 className="bg-blue-500 px-4 py-2 rounded-lg">
            Análise e Desenvolvimento de Sistemas
          </h2>
          <div className="flex items-center gap-4">
            <div className='flex items-center space-x-2'>
              <span>Brunna Cristina</span>
              <img src="/profile-placeholder.png" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <button onClick={()=>{router.push("/")}} className="bg-red-600 p-1 rounded-lg hover:bg-red-500 transition cursor-pointer">
              <LogOut size={22} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-start p-8">
        <aside className="bg-white/20 rounded-lg p-6 shadow-lg">
          <Image src="/logo-uconnect.png" alt="UConnect Logo" width={150} height={150} className="mb-6 mx-auto" />
          <ul className="space-y-4 text-center">
            <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-800 transition">Colaboração</li>
            <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-800 transition">Feed</li>
            <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-800 transition">Calendário</li>
            <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-800 transition">Chat</li>
          </ul>
        </aside>
        <main className="w-3/4 p-8">
          <div className="flex justify-center space-x-6 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-lg font-medium cursor-pointer ${
                  activeTab === tab ? 'bg-white/90 text-blue-900 shadow-md' : 'bg-blue-700 hover:bg-blue-600'
                } transition`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {feedData.map((item, index) => (
              <div key={index} className="bg-white/90 text-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="mt-4 whitespace-pre-line">{item.message}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-900/90 px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition shadow-md cursor-pointer">
              Ver mais...
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}