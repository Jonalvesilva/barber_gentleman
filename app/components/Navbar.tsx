"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { LinkButton } from "./LinkButton";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        className=" w-full h-[85px] min-[500px]:h-10 bg-[#211d19] min-w-[375px]"
        id="navbar"
      >
        <div className="flex max-[500px]:flex-col max-[500px]:justify-evenly max-w-screen-lg mx-auto h-[85px] min-[500px]:h-10 justify-between">
          <div className="flex flex-row items-center justify-center gap-2 ml-2 min-[500px]:ml-4 sm:ml-10">
            <FaFacebook size={20} className="text-white" />
            <FaInstagram size={20} className="text-white" />
          </div>
          <div className="flex items-center justify-center flex-wrap">
            <LinkButton
              to="https://www.abf.com.br/"
              className="px-3 text-white cursor-pointer"
              target="_blank"
            >
              Seja um franqueado
            </LinkButton>
            <LinkButton
              to="/"
              className="px-3 text-white cursor-pointer"
              target="_blank"
            >
              Acesso Restrito
            </LinkButton>
            <LinkButton
              to="https://www.trinks.com/"
              className="px-3 text-white cursor-pointer"
              target="_blank"
            >
              Agendamentos
            </LinkButton>
          </div>
        </div>
      </div>
      <div className=" w-full h-[150px] bg-[#020303] min-w-[375px]">
        <div className="flex h-[150px] max-w-screen-lg mx-auto justify-between ">
          <div id="div-logo w-[50px] h-full">
            <img src="/assets/logo.jfif" alt="logo" className="w-full h-full" />
          </div>
          <div className="hidden sm:flex items-center justify-center">
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-250}
              duration={700}
              className="text-white text-xl px-3 cursor-pointer hover:text-orange-500 ease-in duration-100 "
            >
              Sobre
            </Link>
            <Link
              activeClass="active"
              to="unidades"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="text-white text-xl px-3 cursor-pointer hover:text-orange-500 ease-in duration-100 "
            >
              Unidades
            </Link>
            <Link
              activeClass="active"
              to="servicos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
              className="text-white text-xl px-3 cursor-pointer hover:text-orange-500 ease-in duration-100 "
            >
              Serviços
            </Link>
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              offset={-250}
              duration={900}
              className="text-white text-xl px-3 cursor-pointer hover:text-orange-500 ease-in duration-100 "
            >
              Contato
            </Link>
          </div>
          <div className="flex sm:hidden items-center justify-center px-8">
            <IoMdMenu
              size={30}
              className="text-white cursor-pointer"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>

      <div id="mobile-menu">
        <div
          className={
            nav
              ? "sm:hidden fixed left-0 top-0 w-full h-screen bg-gray-200/85 z-10"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#020303] p-10 ease-in duration-300"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#020303] ease-in duration-300"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <img
                  src="/assets/logo.jfif"
                  className="w-[150px] h-[150px]"
                  alt="logo"
                ></img>
                <div
                  onClick={handleNav}
                  className="text-white rounded-full p-3 cursor-pointer "
                >
                  <AiOutlineClose size={30} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <ul className="uppercase flex flex-col mt-[150px] items-center">
                  <li className="py-4" key="link1">
                    <Link
                      activeClass="active"
                      to="sobre"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={900}
                      onClick={handleNav}
                      className="text-3xl text-white cursor-pointer hover:text-orange-500 ease-in duration-100 "
                    >
                      Sobre
                    </Link>
                  </li>
                  <li onClick={handleNav} className="py-4" key="link2">
                    <Link
                      activeClass="active"
                      to="unidades"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={700}
                      onClick={handleNav}
                      className="text-3xl text-white hover:text-orange-500 ease-in duration-100"
                    >
                      Unidades
                    </Link>
                  </li>
                  <li className="py-4" key="link3">
                    <Link
                      activeClass="active"
                      to="servicos"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={900}
                      onClick={handleNav}
                      className="text-3xl text-white hover:text-orange-500 ease-in duration-100"
                    >
                      Serviços
                    </Link>
                  </li>
                  <li className="py-4" key="link4">
                    <Link
                      activeClass="active"
                      to="contato"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={900}
                      onClick={handleNav}
                      className="text-3xl text-white hover:text-orange-500 ease-in duration-100"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
