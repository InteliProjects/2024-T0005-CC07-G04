//Importações
import TabHome from "../../components/Tab/TabHome";

//Essa função monta a home
export default function HomePage() {
  return (
    <>
      <div className="grid w-screen">
        <div className=" mx-[3%]  mt-[2.5rem]">
          <h3 className=" text-2xl  font-semibold text-vivo ">
            Boa tarde, Marcos!
          </h3>
          <div className="mt-[-1.9rem]">
            {/* componente com os dados que vão aparecer na página */}
            <TabHome></TabHome>
          </div>
        </div>
      </div>
    </>
  );
}
