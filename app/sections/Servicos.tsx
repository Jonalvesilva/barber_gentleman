import { servicos } from "../constants/servicos";

export function Servicos() {
  return (
    <section
      className=" flex max-w-screen-lg mx-auto flex-col py-12 items-center"
      id="servicos"
    >
      <div>
        <h2 className="text-3xl pb-8">Nossos Serviços</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {servicos.map((data) => {
          return (
            <div
              className="shadow shadow-black w-[250px] h-[250px] flex flex-col items-center justify-center gap-4 bg-amber-300/60
              scale-100 hover:scale-105 ease-in duration-300"
              key="servicos"
            >
              <div className="w-28 rounded-full bg-white">
                <img src={data.urlPhoto} className="p-6"></img>
              </div>
              <p className="uppercase text-md font-bold">{data.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
