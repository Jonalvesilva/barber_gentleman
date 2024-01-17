import Image from "next/image";
import { Hero } from "./components/Hero";
import { Sobre } from "./sections/Sobre";
import { Unidades } from "./sections/Unidades";
import { Funcionarios } from "./sections/Funcionarios";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Unidades />
      <Funcionarios />
    </>
  );
}
