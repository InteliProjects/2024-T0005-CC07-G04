// Dados mockados
const mockedData = [
  { description: 'Utilizados', gb: 30 },
  { description: 'Meu Consumo', gb: 70 },
];

//montando a estética do componente e colocando a porcentagem do gráfico 
const BarHorChart = () => {
  return (
    <div className="mx-5">
      {mockedData.map((item, index) => (
        <div key={index} className="custom-chart-row my-2">
          <span className="custom-chart-label">{item.description}</span>
          <div className="text-white flex items-center h-[1.9rem] rounded bg-gray-100 overflow-hidden">
            <div className="text-white pl-4 pt-[0.2rem] rounded-sm h-[2rem]" style={{ width: `${item.gb}%`, backgroundColor: '#660099' }}>
              <span className="custom-chart-quantity">{`${item.gb}%`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarHorChart;
