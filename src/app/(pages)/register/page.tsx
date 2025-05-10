'use client'

import React, { useState } from 'react';

export default function CadastroPage() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, ''); // remove tudo que não é número
  
    if (rawValue.length <= 2) {
      setPhone(`(${rawValue}`);
    } else if (rawValue.length <= 6) {
      setPhone(`(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`);
    } else if (rawValue.length <= 10) {
      setPhone(`(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7)}`);
    } else {
      setPhone(`(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">UCONNECT</h1>
          <p className="text-gray-600">Cadastre-se para usar o Uconnect!</p>
          <p className="text-gray-600">Para criar sua conta, preencha as informações abaixo:</p>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nome completo:</label>
              <input
                type="text"
                placeholder="Ex: João da Silva"
                className="w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Data de nascimento:</label>
              <input
                type="text"
                placeholder="Ex: 00/00/0000"
                className="w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">E-mail:</label>
              <input
                type="email"
                placeholder="Ex: meuemail00@gmail.com"
                className="w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Matrícula:</label>
              <input
                type="text"
                placeholder="Ex: AA0102034"
                className="w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">DDD + Celular:</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                className="w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Curso:</label>
              <input
                type="text"
                placeholder="Ex: Análise e Desenvolvimento de Sistemas"
                className="w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Voltar
            </button>
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900"
            >
              Avançar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
