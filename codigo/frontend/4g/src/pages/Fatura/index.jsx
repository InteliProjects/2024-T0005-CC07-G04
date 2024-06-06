/* eslint-disable react/jsx-no-undef */
//importações
import { TableFatura } from "../../components/Table/TableFatura";
import { Divider } from "@tremor/react";

//Essa função monta a página de fatura
export default function Fatura() {
  return (
    <>
      <div className="grid w-screen">
        <div className="mt-[2.5rem] mx-[2%]" >
          <h3 className="ml-[2%] mx-[2rem] text-2xl  font-semibold text-vivo ">
            Fatura
          </h3>
          {/* divisor do título e da tabela */}
          <Divider/>
          <div className="flex justify-start w-full mt-4 mx-[2%]">
            <TableFatura/>
          <div className="w-full">
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
