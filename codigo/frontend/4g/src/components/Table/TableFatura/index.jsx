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

// Dados  mockados para preencher a tabela de histórico de pagamentos
const data = [  {
    name: "Vivo Controle 30GB IV",
    Role: "21/fev/2024",
    departement: "Móvel",
    value: "R$38,00",
    status: "pago",
  },
];

// Componente funcional TableFatura que retorna a estrutura da tabela
export function TableFatura() {
  return (
    // Container para a tabela, com largura total da tela
    <div className="w-screen">
      {/* Card do tremor/react usado como contêiner para a tabela e seu cabeçalho */}
      <Card className="w-[70rem]">
        {/* Cabeçalho da tabela */}
        <h3 className="text-tremor-content-strong font-semibold">
          Histórico de pagamento
        </h3>
        {/* Tabela com uma margem superior */}
        <Table className="mt-5">
          {/* Cabeçalho da tabela definindo os títulos das colunas */}
          <TableHead>
            <TableRow>
              <TableHeaderCell>Plano</TableHeaderCell>
              <TableHeaderCell>Data</TableHeaderCell>
              <TableHeaderCell>Tipo</TableHeaderCell>
              <TableHeaderCell>Valor</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          {/* Corpo da tabela, preenchido dinamicamente com os dados */}
          <TableBody>
            {data.map((item) => (
              // Cada linha da tabela corresponde a um registro de pagamento
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.Role}</TableCell>
                <TableCell>{item.departement}</TableCell>
                <TableCell>{item.value}</TableCell>
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
