import { horarios, enderecos } from "../constants/horarios";

export function Footer() {
  return (
    <>
      <section
        style={{ backgroundImage: "url('assets/bg3.jpg')" }}
        className="flex bg-cover bg-center bg-no-repeat h-full py-12 justify-center items-center min-w-[375px]"
      >
        <div className="flex max-w-screen-xl mx-auto bg-black h-full flex-col lg:flex-row w-[80%] gap-y-12">
          <div className="flex flex-col items-center justify-center">
            <div className="w-32">
              <img src="assets/logonobg.png" className="w-full h-full"></img>
            </div>
            <p className="text-gray-200 text-center px-2">
              Venha para a Gentleman e sinta a experiência de como é ser um
              verdadeiro cavalheiro. Entre para o clube!
            </p>
          </div>
          <div className="flex flex-col w-[60%] mx-auto">
            <h3 className="text-white border-b-2 border-orange-500">
              Horários
            </h3>
            {horarios.map((data) => {
              return (
                <div className="flex flex-row justify-between">
                  <h3 className="text-white">{data.semana}</h3>
                  <h3 className="text-white">{data.horario}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-[90%] mx-auto">
            <div>
              <h3 className="text-white border-b-2 border-orange-500">
                Endereços
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pt-2">
              {enderecos.map((data) => {
                return (
                  <div className="flex p-2 justify-between">
                    <h3 className="text-white">{data.name}</h3>
                    <h3 className="text-white">{data.endereco}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black h-16"></div>
    </>
  );
}
