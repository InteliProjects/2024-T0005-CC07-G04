//importações
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import controle from "../../../assets/vivo_controle.jpeg"
import netflix from "../../../assets/card_netflix.jpg"
import total_1 from "../../../assets/vivo_total.png"
import total_2 from "../../../assets/vivo_total_2.jpg"

// Monta os cards de ofertas
const allCards = [
  {
    title: "Controle 9GB",
    description: "Faça um upgrade",
    description_middle: "É muita internet",
    description_bottom: "São 9GB por apenas R$52/mês",
    tags: ["#photography", "#travel", "#winter"],
    imageUrl: controle,
  },
  {
    title: "NETFLIX",
    description: "Assine à um clique!",
    description_middle: "A partir de R$18,90",
    description_bottom: "Séries, filmes, conteúdos originais e muito mais",
    tags: ["#photography", "#travel", "#winter"],
    imageUrl: netflix,
  },
  {
    title: "A meta é economizar",
    description: "200 Mega+13GB no celular",
    description_middle: "Por Apenas R$120/mês",
    description_bottom: "Economia o ano todo",    tags: ["#photography", "#travel", "#winter"],
    imageUrl: total_1,
  },
  {
    title: "Seu bolso agradece",
    description: "300mega+23GB no celular",
    description_middle: "Por apenas R$150/mês",
    description_bottom: "Economize R$860/ano com Vivo total",    tags: ["#photography", "#travel", "#winter"],
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

