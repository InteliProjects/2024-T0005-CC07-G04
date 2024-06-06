/* eslint-disable react/prop-types */

//Montando o modal de cancelamento
function CancelPlanFibra({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Confirmar Cancelamento</h2>
                <p>Você realmente deseja cancelar seu plano?</p>
                <div className="flex justify-end mt-4">
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button 
                        className="bg-purple-500 hover:bg-vivo text-white font-bold py-2 px-4 rounded"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CancelPlanFibra;
