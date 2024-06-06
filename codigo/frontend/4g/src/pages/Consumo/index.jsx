/* eslint-disable react/jsx-no-undef */
//importações
import { TabMovel } from "../../components/Tab/TabMovel";

//Essa função monta a página de consumo
export default function Consumo() {
  return (
    <>
      <div className="grid w-screen">
        <div className="mt-[2.5rem]">
          <h3 className="ml-[2%] text-2xl  font-semibold text-vivo ">
            Meu Consumo
          </h3>
          <div className="flex justify-start mt-4 mx-[2%]">
          <div className="w-full">
          <TabMovel/>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
