import { horarios, enderecos } from "../constants/horarios";

export function Footer() {
  return (
    <>
      <section
        style={{ backgroundImage: "url('assets/bg3.jpg')" }}
        className="flex bg-cover bg-center bg-no-repeat h-full py-12 justify-center items-center min-w-[375px] "
      >
        <div className="flex max-w-screen-xl mx-auto bg-black/85 h-full flex-col lg:flex-row w-[80%] gap-y-12 lg:w-[90%] lg:gap-x-10 lg:items-center lg:p-8 rounded-xl">
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
            <div className="lg:pb-1"></div>
            {horarios.map((data) => {
              return (
                <div className="flex flex-row justify-between" key="data">
                  <h3 className="text-white">{data.semana}</h3>
                  <h3 className="text-white">{data.horario}</h3>
                </div>
              );
            })}
          </div>
          <div className="w-[90%] mx-auto lg:w-full lg:flex lg:flex-col">
            <div>
              <h3 className="text-white border-b-2 border-orange-500">
                Endereços
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 pt-2 lg:grid-cols-1 lg:gap-y-1">
              {enderecos.map((data) => {
                return (
                  <div
                    className="flex p-2 justify-between max-lg:flex-col max-lg:items-center lg:p-0 "
                    key="endereco"
                  >
                    <h3 className="text-white lg:p-0">{data.name}</h3>
                    <h3 className="text-white lg:p-0">{data.endereco}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black h-16 text-white flex items-center justify-center min-w-[375px] text-center">
        Copyright © 2024 AVEC. Todos os direitos reservados.
      </div>
    </>
  );
}
