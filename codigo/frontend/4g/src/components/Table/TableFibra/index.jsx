// Importações
import { RiFlag2Line } from "@remixicon/react";
import {
  Badge,
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
    name: "Vivo Controle 30GB IV",
    Role: "21/fev/2024",
    departement: "Móvel",
    value: "R$38,00",
    status: "pago",
  },
];

// Componente mockado de placeholder para utilização nas próximas sprints
export function TableFibra() {
  return (
    <div className="w-screen">
      <Card className="w-[70rem] mr-">
        {/* Título da tabela */}
        <h3 className="text-tremor-content-strong font-semibold">
          Histórico de pagamento
        </h3>
        <Table className="mt-5">
          {/* Cabeçalho da tabela, definindo os títulos das colunas */}
          <TableHead>
            <TableRow>
              <TableHeaderCell>Plano</TableHeaderCell>
              <TableHeaderCell>Data</TableHeaderCell>
              <TableHeaderCell>Departamento</TableHeaderCell>
              <TableHeaderCell>Valor</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          {/* Corpo da tabela, onde os registros de pagamento são mapeados para linhas */}
          <TableBody>
            {data.map((item) => (
              // Cada linha representa um registro de pagamento
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.Role}</TableCell>
                <TableCell>{item.departement}</TableCell>
                <TableCell>{item.value}</TableCell>
                {/* Badge para o status de pagamento, com ícone e cor específica */}
                <TableCell>
                  <Badge color="emerald" icon={RiFlag2Line}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
