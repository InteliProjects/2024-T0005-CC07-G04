//Importações
import { useState, useEffect } from 'react';
import { Smartphone, ReceiptText, CircleDollarSign, XCircle } from "lucide-react";
import CancelPlanMovel from '../../Modal/CancelPlanMovel';

//Função que forma o componente dos cards do plano movel que está na home
function CardMovel() {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [planName, setPlanName] = useState("");
    const [diaPagamento, setDiaPagamento] = useState("");
    const [mesAno, setMesAno] = useState("");
    const [saldoInternet, setSaldoInternet] = useState("");
    const [totalSaldoInternet, setSaldoTotal] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://l2-elb-8dbac5d1e02837fe.elb.us-east-1.amazonaws.com/vivoMovel/402765cd-0f91-47de-b392-3f93260b2d81');
                const data = await response.json();

                // Atualizando os estados com os valores da API
                setPlanName(data.plano);
                setDiaPagamento(data.diaPagamento);
                setMesAno(data.mesAno);
                setSaldoInternet(`R$ ${data.saldoInternet.toFixed(2)}`);
                setSaldoTotal(`R$ ${data.totalSaldoInternet.toFixed(2)}`)

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
          {/* Card que indica o plano e o numero de celular cadastrado na conta */}
            <div className="flex w-[33%] h-[5.5rem] border rounded-lg border-gray-200 shadow-sm">
                <Smartphone className="self-center text-vivo w-[15%]"/>
                <div className="self-center w-[35%] mx-5">
                    <p className="text-[0.85rem] font-semibold">{planName}</p>
                    <p className="text-gray-500 text-[0.85rem]">(12)34567-8910</p>
                </div>
                <div className="flex justify-end w-[35%] pr-5">
                    <XCircle className="self-center text-vivo ml-4 cursor-pointer" onClick={() => setIsConfirmModalOpen(true)}/> {/* Acionamento do modal */}
                </div>
            </div>

            {/* Card que mostra as informações da fatura atual*/}
            <div className="flex w-[33%] h-[5.5rem] border rounded-lg border-gray-200 shadow-sm">
                <ReceiptText className="self-center text-vivo ml-4" />
                <div className="self-center mx-5">
                    <p className="text-[0.85rem] text-gray-500">{`Venceu em ${diaPagamento}/${mesAno}`}</p>
                    <p className="text-gray-500 text-[1.2rem]">{totalSaldoInternet}</p>
                    <p className="text-[0.8rem] text-vivo font-semibold">Ver minhas faturas {">"}</p>
                </div>
            </div>

            {/*Card que mostra o quanto de saldo em créditos que o usuário tem*/}
            <div className="flex w-[33%] h-[5.5rem] border rounded-lg border-gray-200 shadow-sm">
                <CircleDollarSign className="self-center text-vivo ml-4" />
                <div className="self-center mx-5">
                    <p className="text-[0.85rem] font-semibold">Saldo total</p>
                    <p className="text-gray-500 text-[1.2rem]">{saldoInternet}</p>
                    <p className="text-[0.8rem] text-gray-500">Valor total de recargas efetuadas</p>
                </div>
            </div>
            {/* Chamando e preparando o modal */}
            {isConfirmModalOpen && <CancelPlanMovel onConfirm={handleConfirm} onCancel={handleCancel} />}
        </div>
    );
}

export default CardMovel;
