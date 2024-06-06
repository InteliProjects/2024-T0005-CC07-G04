//importações
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import controle from "../../../assets/vivo_fibra.jpg"
import netflix from "../../../assets/vivo_fibra_.jpg"
import total_1 from "../../../assets/vivo_total_3.jpg"
import total_2 from "../../../assets/vivo_fibra_3.jpg"

// Monta os cards de ofertas
const allCards = [
  {
    title: "300 Mega por apenas R$100/mês",
    description: "Oferta imperdível!",
    description_middle: "É muita internet",
    description_bottom: "A melhor Fibra do Brasil pra você ficar conectado com velocidade, qualidade e estabilidade na sua casa!",
    tags: ["#photography", "#travel", "#winter"],
    imageUrl: controle,
  },
  {
    title: "E Economia em um único Plano?",
    description: "Tenha mais velocidade!",
    description_bottom: "Tenha 500 Mega + 53 GB no celular é velocidade garantida pra casa toda e gigas para usar a vontade por...",
    tags: ["#photography", "#travel", "#winter"],
    imageUrl: netflix,
  },
  {
    title: "Fibra por R$ 95/mês só no Vivo Total",
    description: "2024 pede economia",
    description_bottom: "300 Mega + 23 GB no celular por R$ 150/mês, economize o ano todo e leve internet para sua casa e...",    tags: ["#photography", "#travel", "#winter"],
    imageUrl: total_1,
  },
  {
    title: "Você leva Fibra 300 Mega e 23 GB no celular por R$150/mês",
    description: "Por mais 30 reais",
    description_bottom: "Além de ter a fibra com Wi-fi e instalação grátis, no mesmo plano você tem muitos gigas no celular",    tags: ["#photography", "#travel", "#winter"],
    imageUrl: total_2,
  },
];

export default function PromoMovel() {
  const [startIndex, setStartIndex] = useState(0);

  //Lógica para passar para o próximo card e o anterior
  const nextCard = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex + 1) % allCards.length);
  };

  const prevCard = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex - 1 + allCards.length) % allCards.length);
  };

  const visibleCards = allCards.slice(startIndex, startIndex + 3).concat(allCards.slice(0, Math.max(0, 3 - (allCards.length - startIndex))));

  return (
    <>
      <p className="text-gray-400 text-[0.9rem] uppercase font-semibold mt-10">
        Ofertas especiais
      </p>
      <div className="flex w-full items-center gap-x-3 mt-5">
        <ChevronLeft className="w-[4rem] cursor-pointer" onClick={prevCard} />
        <div className="flex gap-x-4 transition-transform duration-500">
          {visibleCards.map((card, index) => (
            <div key={index} className="w-full rounded overflow-hidden shadow-lg">
              <img className="w-full" src={card.imageUrl} alt={card.title} />
              <div className="px-6 py-8 h-[15rem]">
                <div className="font-semibold text-xl mb-2">{card.title}</div>
                <p className="text-gray-500 text-sm">{card.description}</p>
                <p className="text-gray-700 font-semibold mt-2 text-md">{card.description_middle}</p>
                <p className="text-gray-500 text-sm">{card.description_bottom}</p>
              </div>
            </div>
          ))}
        </div>
        <ChevronRight className="w-[4rem] cursor-pointer" onClick={nextCard} />
      </div>
    </>
  );
}

