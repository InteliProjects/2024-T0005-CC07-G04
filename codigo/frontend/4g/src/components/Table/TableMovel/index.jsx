import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "Serviço",
    Role: "Consumo",
    departement: "Data/Hora",
    value: "Valor",
  },
  {
    name: "Serviço",
    Role: "Consumo",
    departement: "Data/Hora",
    value: "Valor",
  },
  {
    name: "Serviço",
    Role: "Consumo",
    departement: "Data/Hora",
    value: "Valor",
  },
  {
    name: "Serviço",
    Role: "Consumo",
    departement: "Data/Hora",
    value: "Valor",
  },
  {
    name: "Serviço",
    Role: "Consumo",
    departement: "Data/Hora",
    value: "Valor",
  },
  {
    name: "Serviço",
    Role: "Consumo",
    departement: "Data/Hora",
    value: "Valor",
  },

];

export function TableMovel() {
  return (
    <div className="w-full">
      <Card className="w-[75rem] mr-">
      <h3 className="text-vivo text-lg font-semibold">
        Detalhes de Uso
      </h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Serviços</TableHeaderCell>
            <TableHeaderCell>Consumo</TableHeaderCell>
            <TableHeaderCell>Data/Hora</TableHeaderCell>
            <TableHeaderCell>Valor</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Role}</TableCell>
              <TableCell>{item.departement}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
    </div>
    
  );
}
