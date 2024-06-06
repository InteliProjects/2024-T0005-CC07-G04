//Importações
import { useState } from 'react';
import { Smartphone, RadioTower } from "lucide-react";
import DuoMovel from '../../Duo/DuoMovel';
import DuoFibra from '../../Duo/DuoFibra';
//Essa função monta a lógica de tabs para os diferentes tipos de serviço

const TabHome = () => {
  const [activeTab, setActiveTab] = useState('movel');
      {/* Aqui é feito o switch para o usuário escolher o que quer visualizar */}
  const sliderClass = activeTab === 'movel'
    ? 'translate-x-0'
    : 'translate-x-full';

  return (
    <div className="relative w-full">
      <div className="flex justify-end items-center w-full">
        <div className="w-[11rem] h-[2rem] bg-gray-200 p-1 rounded-[0.2rem] relative">
          <div className={`h-[1.6rem] w-1/2 bg-white rounded-[0.2rem] transform transition ease-in-out duration-300 ${sliderClass}`}>
          </div>
          <button
            className="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-1/2 text-[0.85rem] text-vivo focus:outline-none"
            onClick={() => setActiveTab('movel')}
          >
            <Smartphone className='w-4 mr-2'/>
            Móvel
          </button>
          <button
            className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-1/2 text-[0.85rem] text-black focus:outline-none"
            onClick={() => setActiveTab('fibra')}
          >
            <RadioTower className='w-4 mr-2'/>
            Fibra
          </button>
        </div>
      </div>
       {/* Aqui são chamadas os componentes que mostram os dados de cada serviço */}
      {activeTab === 'movel' && <DuoMovel />}
      {activeTab === 'fibra' && <DuoFibra />}
    </div>
  );
};

export default TabHome;
