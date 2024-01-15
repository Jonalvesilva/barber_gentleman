import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Navbar() {
  return (
    <>
      <div className=" w-full h-10 bg-[#211d19]">
        <div className="flex max-w-screen-md mx-auto h-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <FaFacebook size={20} className="text-white" />
            <FaInstagram size={20} className="text-white" />
          </div>
        </div>
      </div>
      <div className=" w-full h-[150px] bg-[#020303]">
        <div className="flex h-[150px]">
          <div id="div-logo w-[50px] h-full">
            <img src="/assets/logo.jfif" alt="logo" className="w-full h-full" />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
