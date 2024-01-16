import Image from "next/image";
import { Hero } from "./components/Hero";
import { Sobre } from "./sections/Sobre";
import { Unidades } from "./sections/Unidades";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Unidades />
    </>
  );
}
