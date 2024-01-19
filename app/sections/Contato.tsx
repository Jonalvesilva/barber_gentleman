"use client";
import toast from "react-simple-toasts";
import { Toast } from "../components/Toast";

export function Contato() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Sua mensagem foi enviada", {
      render: (message) => (
        <Toast
          className="bg-green-800 p-4 text-white text-lg md:text-xl rounded-full"
          message={message}
        />
      ),
    });
    handleReset();
  };

  const handleReset = () => {
    const states: any = document.getElementsByClassName("campo");
    for (let i = 0; i < states.length; i++) {
      states[i].value = "";
    }
  };

  return (
    <section className="bg-black/90 py-16">
      <div className="flex flex-col max-w-screen-lg lg:mx-auto">
        <div>
          <h2 className="text-white text-3xl pb-8 text-center lg:text-start">
            Contato
          </h2>
        </div>
        <div className="w-[90%] mx-auto lg:w-full bg-orange-300/50 p-6 rounded-xl">
          <form
            method="POST"
            className="flex flex-col gap-y-6"
            onSubmit={onSubmit}
            id="contato"
            action="#contato"
          >
            <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
              <label className="text-white  text-sm font-bold flex-1">
                Nome
                <input
                  type="text"
                  className="border text-black rounded w-full py-1 px-2 font-normal campo "
                />
              </label>
              <label className="text-white  text-sm font-bold flex-1">
                Sobrenome
                <input
                  type="text"
                  className="border text-black rounded w-full py-1 px-2 font-normal campo "
                />
              </label>
            </div>
            <label className="text-white  text-md font-bold flex-1">
              Email
              <input
                type="text"
                className="border rounded text-black w-full py-1 px-2 font-normal campo"
              />
            </label>
            <label className="text-white  text-sm font-bold flex-1">
              Mensagem
              <textarea className="border text-black rounded w-full px-2 font-normal campo"></textarea>
            </label>
            <button
              type="submit"
              className="text-white bg-orange-600/80 p-2 shadowText"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
