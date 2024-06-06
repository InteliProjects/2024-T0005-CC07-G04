//Importações
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@tremor/react";
import { Smartphone, RadioTower} from "lucide-react";
import BarChartMovel from "../../Charts/Consumo/Movel/BarChart";
import DonutChartMovel from "../../Charts/Consumo/Movel/DonutChart";
import { TableMovel } from "../../Table/TableMovel";

//Essa função monta a lógica de tabs para a página de consumo
export const TabMovel = () => (
  <div className="">
    {/* Aqui é feito o switch para o usuário escolher o que quer visualizar */}
    <TabGroup> 
      <TabList variant="line" defaultValue="1" className="" color={"violet"}>
        <Tab className="color-green" value="1">
          <div className="flex items-center">
            <Smartphone className="mr-2" size={16} />
            Móvel
          </div>
        </Tab>
        <Tab value="2">
          <div className="flex items-center">
            <RadioTower className="mr-2" size={16} />
            Fibra
          </div>
        </Tab>
      </TabList>
      {/* Aqui são chamadas os componentes que mostram os dados de consumo de cada plano*/}
      <TabPanels>
        <TabPanel>
          <div className="grid mt- gap-y-4">
          <div className="flex w-full gap-x-3">
          <DonutChartMovel/>
          <BarChartMovel/>
          </div>
          <TableMovel/>
          </div>
        </TabPanel>
        <TabPanel>
        <BarChartMovel/>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
);
