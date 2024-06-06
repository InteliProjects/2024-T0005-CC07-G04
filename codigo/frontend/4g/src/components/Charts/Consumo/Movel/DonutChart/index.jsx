//importação
import { PieChart, Pie, Cell, Tooltip} from "recharts";
import BarHorChart from "../BarHorChart";
import { Divider } from '@tremor/react';

//dados mockados
const data = [
  { name: "Utilizado", value: 24 },
  { name: "Disponível", value: 6 },
];
const COLORS = ["#660099", "#E6E6E6"];

//montando o componente de gráfico circular móvel
export default function DonutChartMovel() {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm w-[35%]">
      <h1 className="ml-7 mt-3 text-vivo font-semibold text-[1.1rem]">
       Consumo atual
      </h1>
      <div className=" flex justify-center mt-[-5rem] ml-[-2rem] mb-2">
          <PieChart width={210} height={300}>
            <Pie
              data={data}
              cx={120}
              cy={200}
              cornerRadius={40}
              innerRadius={70}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip/>
          </PieChart>
      </div>
      <Divider/>
      <BarHorChart/>
    </div>
  );
}
