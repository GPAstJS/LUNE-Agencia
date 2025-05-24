import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navButtons = ["INÍCIO", "SERVIÇOS", "NOSSO PORTFÓLIO", "CONTATO"];

  return (
    <header style={{
      backgroundColor: "rgba(0, 0, 0, 0.637)"
    }} className="w-full  h-[7.5rem] flex items-center justify-around text-white  z-99  ">
      <img className="w-[12.5rem] cursor-pointer" src={Logo} alt="Logo Here" />

      {width < 768 && <IoMenuSharp className="w-[2rem] h-[2rem]" />}

      {width >= 768 && (
        <nav className="flex">
          {navButtons.map((e, i) => {
            return (
              <div
                className="border-b-[3px] border-transparent hover:border-purple-bright hover:text-purple-bright duration-200 px-[2rem] cursor-pointer "
                key={i}
              >
                <p className="text-[1.25rem] font-bold ">{e}</p>
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
