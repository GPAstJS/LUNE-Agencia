import Header from "./components/header";
import Moon450 from "./assets/images/spin-moon.png";
import { BsBrush } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BsKanban } from "react-icons/bs";
import { FaB, FaLaptop } from "react-icons/fa6";
import { LuSmartphone } from "react-icons/lu";
import { BsShop } from "react-icons/bs";

import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import "./index.css";
import { Card } from "./components/card";

export const App = () => {
  const cards = [
    {
      icon: <BsBrush className={` svg w-[4rem] h-[4rem]`} />,
      title: "Design Gráfico & UI/UX",
      text: "Destaque sua marca com um design poderoso! Criamos identidades visuais únicas, profissionais e memoráveis, que transmitem autenticidade e fortalecem sua presença no mercado. Do logotipo ao branding completo, ajudamos sua empresa a se destacar e conquistar a confiança do seu público.",
    },
    {
      icon: <FaCode className={` svg w-[4rem] h-[4rem]`} />,
      title: "Design Gráfico & UI/UX",
      text: "Destaque sua marca com um design poderoso! Criamos identidades visuais únicas, profissionais e memoráveis, que transmitem autenticidade e fortalecem sua presença no mercado. Do logotipo ao branding completo, ajudamos sua empresa a se destacar e conquistar a confiança do seu público.",
    },
    {
      icon: <FaInstagram className={` svg w-[4rem] h-[4rem]`} />,
      title: "Design Gráfico & UI/UX",
      text: "Destaque sua marca com um design poderoso! Criamos identidades visuais únicas, profissionais e memoráveis, que transmitem autenticidade e fortalecem sua presença no mercado. Do logotipo ao branding completo, ajudamos sua empresa a se destacar e conquistar a confiança do seu público.",
    },
  ];

  const products = [
    {
      icon: <IoEyeOutline className="svg w-[4rem] h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <BsKanban className="svg w-[4rem] h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <BsKanban className="svg w-[4rem] h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <FaLaptop className="svg w-[4rem] h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <LuSmartphone className="svg w-[4rem] h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <BsShop className="svg w-[4rem] h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
  ];

  return (
    <div className=" flex flex-col items-center  font-poppins">
      <Header />
      <div className="w-full flex flex-col 2xl:flex-row items-center justify-around text-white sm:mt-[5rem] 2xl:mt-[15rem]  p-[2rem]  ">
        <div className="flex flex-col  items-start gap-y-[1rem] z-0">
          <p className="text-[3rem]   leading-[4rem] font-bold">
            LUNE TECNOLOGIA <br />
            CRIATIVA
          </p>

          <p className="text-[1.5rem] sm:text-[1.75rem] font-bold">
            Transformamos Ideias em Realidade Digital
          </p>

          <p className="text-[1.5rem] sm:text-[1.65rem]">
            Precisa de um{" "}
            <span className="text-purple-bright font-bold">
              site profissional, branding marcante <br />
            </span>
            <span className="font-bold">ou </span>
            <span className="text-purple-bright font-bold">
              presença digital forte?
            </span>
          </p>
          <p className="text-[1.5rem] sm:text-[1.65rem]">
            A Lune cria soluções
            <span className="font-bold"> sob medida para você</span>.
          </p>
          <button className="cursor-pointer hover:scale-[1.2] duration-200 h-[4rem] px-[1.50rem] rounded-full font-bold tracking-widest bg-linear-to-r from-gradientstart to-gradientend">
            NOSSO PORTFÓLIO
          </button>
        </div>

        <img
          id="spin-moon"
          className="sm:h-[450px] md:h-[500px] py-[2rem] sm:py-0"
          src={Moon450}
          alt="Spinning Moon"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center py-[10rem] px-[2rem] sm:px-0">
        <div className="flex gap-x-[1rem] items-center">
          <div className="bg-purple-bright h-[10px] w-[45px]"></div>

          <p className=" text-[1.25rem] text-center sm:text-start sm:text-[2rem] text-white font-bold">
            POR QUE ESCOLHER A LUNE?
          </p>

          <div className="bg-purple-bright h-[10px] w-[45px]"></div>
        </div>

        <p className="text-[1rem] sm:text-[1.25rem] text-white text-center max-w-[35rem]">
          Contamos com uma equipe criativa e especializada, desenvolvendo
          projetos personalizados para cada cliente, sempre com foco em inovação
          e tecnologia.
        </p>

        <div className="grid sm:grid-cols-1 2xl:grid-cols-3 gap-[3rem] py-[4rem]">
          {cards.map((e, i) => {
            return (
              <Card
                key={i}
                className={"card h-[42rem] w-[30rem] 2xl:w-[27rem] sm:items-center md:items-start justify-between p-[4rem]"}
                icon={e.icon}
                title={e.title}
                text={e.text}
              />
            );
          })}
        </div>

        <button className="cursor-pointer hover:scale-[1.2] text-white duration-200 h-[4rem] px-[1.50rem] rounded-full font-bold tracking-widest bg-linear-to-r from-gradientstart to-gradientend">
          NOSSO PORTFÓLIO
        </button>
      </div>

      <div className="flex flex-col items-center justify-center px-[2rem] sm:px-0">
        <div className="flex gap-x-[1rem] items-center">
          <div className="bg-purple-bright h-[10px] w-[45px]"></div>

          <p className=" text-[1.25rem] text-center sm:text-start sm:text-[2rem] text-white font-bold">
            POR QUE ESCOLHER A LUNE?
          </p>

          <div className="bg-purple-bright h-[10px] w-[45px]"></div>
        </div>

        <p className="text-[1rem] sm:text-[1.25rem] text-white text-center max-w-[35rem]">
          Contamos com uma equipe criativa e especializada, desenvolvendo
          projetos personalizados para cada cliente, sempre com foco em inovação
          e tecnologia.
        </p>

        <div className="grid  sm:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-[3rem] py-[5rem]">
          {products.map((e, i) => {
            return (
              <Card
                key={i}
                className={"card h-[25rem] w-[25rem] items-center text-center"}
                icon={e.icon}
                title={e.title}
                text={e.text}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col  xl:flex-row items-center justify-around py-[5rem] px-[2rem] md:px-0 ">
        <div className="bg-[#191818]  w-full md:w-[35rem]  h-[35rem] flex flex-col items-center justify-center rounded-[15px] py-[5rem] px-[2rem] gap-y-[3rem] ">
          <input
            className="border-white border-[1px] w-full h-[5rem] text-[#fff] font-bold outline-none px-[2rem] rounded-[5px]"
            placeholder="Nome"
            type="text"
          />
          <input
            className="border-white border-[1px] w-full h-[5rem] text-[#fff] font-bold outline-none px-[2rem] rounded-[5px]"
            placeholder="Email"
            type="text"
          />
          <input
            className="border-white border-[1px] w-full h-[5rem] text-[#fff] font-bold outline-none px-[2rem] rounded-[5px]"
            placeholder="WhatsApp"
            type="text"
          />
          <button className="cursor-pointer hover:scale-[1.2] duration-200 h-[4rem] px-[1.50rem] rounded-full font-bold tracking-widest bg-linear-to-r from-gradientstart to-gradientend text-white">
            ENTRE EM CONTATO
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-[2rem] py-[5rem]">
          <img src={Moon450} alt="LuneTech Moon" />

          <p className="text-white font-bold text-[3rem]">NOSSAS REDES</p>

          <div className="flex  gap-x-[1.5rem]">
            <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-[5px]">
              <FaBehance className="w-[2rem] h-[2rem] fill-white" />
            </div>

            <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-[5px]">
              <FaBehance className="w-[2rem] h-[2rem] fill-white" />
            </div>
            <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-[5px]">
              <FaBehance className="w-[2rem] h-[2rem] fill-white" />
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="container mx-auto w-full flex flex-col items-center justify-center py-[4rem]">

        <div className="w-[50%] py-[1rem] text-center border-white border-b-[1px]">
          <p className="text-white font-bold text-[1rem]">LUNE SOLUÇÕES CRIATIVAS®</p>
        </div>

        <p className="text-[0.8rem] text-white py-[1rem]">Todos os Direitos Reservados, 2025</p>

      </footer> */}
    </div>
  );
};
