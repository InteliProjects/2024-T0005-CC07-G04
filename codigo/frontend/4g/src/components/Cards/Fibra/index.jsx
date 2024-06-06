//Importações
import { useState, useEffect } from 'react';
import { RadioTower, ReceiptText, Tv, XCircle } from "lucide-react"
import CancelPlanFibra from "../../Modal/CancelPlanFibra";

//Função que forma o componente dos cards do plano movel que está na home
export default function CardFibra() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [planName, setPlanName] = useState("Fibra");
  const [mesAno, setMesAno] = useState("");
  const [totalSaldoInternet, setSaldoTotal] = useState("");

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://l2-elb-8dbac5d1e02837fe.elb.us-east-1.amazonaws.com/vivoFibra/c70107f1-adfb-4562-8bbe-2e197f39397c');
              const data = await response.json();

              // Atualizando os estados com os valores da API
              setMesAno(`13/${data.mesAno}`);
              setSaldoTotal(`R$ ${data.totalSaldoInternet.toFixed(2)}`);

              console.log(data);
          } catch (error) {
              console.error("Erro ao buscar dados da API:", error);
          }
      };

      fetchData();
  }, []);

  const handleConfirm = () => {
      console.log("Plano cancelado.");
      setPlanName("Sem Plano");
      setIsConfirmModalOpen(false);
  };

  const handleCancel = () => {
      console.log("Cancelamento abortado.");
      setIsConfirmModalOpen(false);
  };

  //montando a estética do componente assim como chamando as funções de acordo com a ação do usuário
  return (
      <div className="flex justify-between mt-[2rem] w-full gap-x-4">
          <div className="flex w-[33%] h-[5.5rem] border rounded-lg border-gray-200 shadow-sm">
              <RadioTower className="self-center text-vivo ml-4" />
              <div className="self-center w-[50%] mx-5">
                  <p className="text-[1rem] font-semibold">{planName}</p>
              </div>
              <div className="flex justify-end w-[35%] pr-9">
                  <XCircle className="self-center text-vivo ml-4 cursor-pointer" onClick={() => setIsConfirmModalOpen(true)} />
              </div>
          </div>
          <div className="flex w-[33%] h-[5.5rem] border rounded-lg border-gray-200 shadow-sm">
              <ReceiptText className="self-center text-vivo ml-4" />
              <div className="self-center mx-5">
                  <p className="text-[0.85rem] text-gray-500">Venceu em {mesAno}</p>
                  <p className="text-gray-500 text-[1.2rem]">{totalSaldoInternet}</p>
                  <p className="text-[0.8rem] text-vivo font-semibold">Ver minhas faturas {">"} </p>
              </div>
          </div>
          <div className="flex w-[33%] h-[5.5rem] border rounded-lg border-gray-200 shadow-sm">
              <Tv className="self-center text-vivo ml-4" />
              <div className="self-center mx-5">
                  <p className="text-[0.85rem] text-gray-500">Serviços adicionais</p>
                  <p className="text-blacktext-[0.9rem] font-semibold">Vivo Play Essencial</p>
                  <p className="text-[0.8rem] text-gray-500">Com mais de 60 canais</p>
              </div>
          </div>
          {isConfirmModalOpen && <CancelPlanFibra onConfirm={handleConfirm} onCancel={handleCancel} />}
      </div>
  );
}