import { funcionarios } from "../constants/funcionarios";

export function Funcionarios() {
  return (
    <section
      id="funcionarios"
      className="flex items-center justify-center bg-black/90 py-12 "
    >
      <div className="flex max-w-screen-lg flex-col w-full items-center">
        <div>
          <h2 className="text-white text-3xl pb-2 text-center">Funcionários</h2>
          <p className="text-white text-lg pb-8">
            Conheça alguns de nossos funcionários
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1023px]:grid-cols-3  gap-10">
          {funcionarios.map((data) => {
            return (
              <div className="h-[300px] w-[300px] relative" key={data.name}>
                <span className="absolute top-0 right-0 p-2 bg-blue-500 text-lg text-white">
                  {data.name}
                </span>
                <img
                  src={data.urlPhoto}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 p-1 bg-blue-500 text-lg text-white">
                  {data.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
