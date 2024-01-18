import Slider from "../components/Slider";

export function Unidades() {
  return (
    <section className="flex mx-auto items-center justify-center">
      <div
        style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
        className="h-[600px] w-full flex"
      >
        <div className="flex flex-col max-w-screen-lg mx-auto items-center w-[90%] py-14">
          <div className="py-8 w-full">
            <h2 className="text-white text-3xl text-start">Nossas Unidades</h2>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
