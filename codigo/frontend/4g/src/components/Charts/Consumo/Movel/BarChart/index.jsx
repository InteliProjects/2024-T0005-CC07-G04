import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

//dados mockados pro gráfico de barra
const data = [
  {
    name: "Jan",
    utilizado: 16,
    disponivel: 24,
    amt: 2400
  },
  {
    name: "Fev",
    utilizado: 19,
    disponivel: 11,
    amt: 2210
  },
  {
    name: "Mar",
    utilizado: 17,
    disponivel: 13,
    amt: 2290
  },
  {
    name: "Abr",
    utilizado: 35,
    disponivel: 5,
    amt: 2000
  },
  {
    name: "Mai",
    utilizado: 15,
    disponivel: 15,
    amt: 2181
  },
  {
    name: "Jun",
    utilizado: 20,
    disponivel: 10,
    amt: 2500
  },
  {
    name: "Jul",
    utilizado: 34,
    disponivel: 6,
    amt: 2100
  },
  {
  name: "Ago",
  utilizado: 30,
  disponivel: 14,
  amt: 2400
},
{
  name: "Set",
  utilizado: 30,
  disponivel: 13,
  amt: 2210
},
{
  name: "Out",
  utilizado: 20,
  disponivel: 10,
  amt: 2290
},
{
  name: "Nov",
  utilizado: 27,
  disponivel: 23,
  amt: 2000
},
{
  name: "Dez",
  utilizado: 18,
  disponivel: 12,
  amt: 2181
}
];

//montando a estética do componente e chamando os dados
export default function BarChartMovel() {
  return (
    <div className=" border border-gray-200 rounded-lg shadow-sm w-[70%]">
      <h1 className="ml-7 mt-[1.2rem] text-vivo font-semibold text-[1.1rem]">Consumo mensal</h1>
      <div className="flex justify-center mt-2 mb-2">
        <ResponsiveContainer width="95%" height={400}>
        <BarChart
      width={"70%"}
      height={310}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis unit={"GB"}/>
      <Tooltip/>
      <Bar dataKey="utilizado" stackId={"a"} fill="#660099" />
      <Bar dataKey="disponivel" stackId={"a"} fill="#660099" />
    </BarChart>
        </ResponsiveContainer>
    </div>
    </div>
  );
}