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
      icon: <BsBrush className={` svg h-[2rem] w-[2rem] xs:h-[3rem] xs:w-[3rem] sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Design Gráfico & UI/UX",
      text: "Destaque sua marca com um design poderoso! Criamos identidades visuais únicas, profissionais e memoráveis, que transmitem autenticidade e fortalecem sua presença no mercado. Do logotipo ao branding completo, ajudamos sua empresa a se destacar e conquistar a confiança do seu público.",
    },
    {
      icon: <FaCode className={` svg h-[2rem] w-[2rem] xs:h-[3rem] xs:w-[3rem]  sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Design Gráfico & UI/UX",
      text: "Destaque sua marca com um design poderoso! Criamos identidades visuais únicas, profissionais e memoráveis, que transmitem autenticidade e fortalecem sua presença no mercado. Do logotipo ao branding completo, ajudamos sua empresa a se destacar e conquistar a confiança do seu público.",
    },
    {
      icon: <FaInstagram className={` svg h-[2rem] w-[2rem] xs:h-[3rem] xs:w-[3rem]  sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Design Gráfico & UI/UX",
      text: "Destaque sua marca com um design poderoso! Criamos identidades visuais únicas, profissionais e memoráveis, que transmitem autenticidade e fortalecem sua presença no mercado. Do logotipo ao branding completo, ajudamos sua empresa a se destacar e conquistar a confiança do seu público.",
    },
  ];

  const products = [
    {
      icon: <IoEyeOutline className="svg h-[2rem]  xs:h-[3rem] xs:w-[3rem]  w-[2rem] sm:w-[4rem] sm:h-[4rem] " />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <BsKanban className={` svg h-[2rem] w-[2rem] xs:h-[3rem] xs:w-[3rem] sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <BsKanban className={` svg h-[2rem] w-[2rem]  xs:h-[3rem] xs:w-[3rem]  sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <FaLaptop className={` svg h-[2rem] w-[2rem] xs:h-[3rem] xs:w-[3rem]  sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },
    {
      icon: <BsShop className={` svg h-[2rem] w-[2rem] xs:h-[3rem] xs:w-[3rem]  sm:w-[4rem] sm:h-[4rem]`} />,
      title: "Identidade Visual",
      text: "Desenvolvimento de logotipos, paleta de cores e materiais gráficos. ",
    },

  ];

  return (
    <div className=" flex flex-col items-center  font-poppins">
      <Header />
      <div className="w-full flex flex-col 2xl:flex-row items-center 2xl:justify-around justify-evenly text-white sm:mt-[2rem]   p-[2rem]  ">
        <div className="flex flex-col  items-center 2xl:items-start gap-y-[1rem] z-0 px-[1rem]  2xl:px-[4rem]">
          <div className="flex flex-col ">
            <p className=" text-[2rem] sm:text-[2.5rem] text-center 2xl:text-start sm:text-[3rem] 2xl:text-[5rem] leading-[2rem] 2xl:leading-[5rem]  sm:leading-[3rem] font-bold">
              LUNE TECNOLOGIA <br />
              CRIATIVA
            </p>

            <p className="text-[1rem] text-center md:text-start sm:text-[1.50rem] font-bold">
              Transformamos Ideias em Realidade Digital
            </p>
          </div>

          <p className="text-[1rem] leading-[1.25rem] sm:leading-[1.5rem]  text-center 2xl:text-start   sm:text-[1.5rem]">
            Precisa de um{" "}
            <span className="text-purple-bright font-bold">
              site profissional, <br /> branding marcante
            </span>
            <span className="font-bold">{" "} ou </span>
            <span className="text-purple-bright font-bold">
              presença digital forte? <br />
            </span>
            A Lune cria soluções
            <span className="font-bold "> sob medida para você</span>.
          </p>

          <button className="cursor-pointer text-[0.75rem] sm:text-[1rem]  hover:scale-[1.2] duration-200 h-[4rem] px-[1.50rem] rounded-full font-bold tracking-wide sm:tracking-widest bg-linear-to-r from-gradientstart to-gradientend">
            NOSSO PORTFÓLIO
          </button>
        </div>

        <img
          id="spin-moon"
          className="h-[250px] xs:h-[400px]  sm:h-[450px] md:h-[500px] py-[2rem] "
          src={Moon450}
          alt="Spinning Moon"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center py-[2rem]  px-[2rem] md:px-0">
        <div className="flex  items-center">

          <p className=" text-[1rem] text-center sm:text-start sm:text-[2rem]  text-white font-bold">
            POR QUE ESCOLHER A LUNE?
          </p>

        </div>

        <p className="text-[1rem] sm:text-[1.25rem] text-white px-[2rem] sm:px-0 text-center max-w-[35rem]">
          Contamos com uma equipe criativa e especializada, desenvolvendo
          projetos personalizados para cada cliente, sempre com foco em inovação
          e tecnologia.
        </p>

        <div className="grid   sm:grid-cols-1 xl:flex xl:justify-center xl:flex-wrap 2xl:grid-cols-3 gap-[3rem] py-[4rem]">
          {cards.map((e, i) => {
            return (
              <Card
                key={i}
                className={"card h-[22rem] w-[16rem] xs:h-[25rem] xs:w-[25rem]   sm:h-[37rem] sm:w-[30rem] 2xl:w-[27rem] items-center md:items-start justify-between p-[2rem] sm:p-[4rem]"}
                icon={e.icon}
                title={e.title}
                text={e.text}
              />
            );
          })}
        </div>

        <button className="cursor-pointer hover:scale-[1.2] text-[0.75rem] sm:text-[1rem] text-white duration-200 h-[4rem] px-[1.50rem] rounded-full font-bold tracking-widest bg-linear-to-r from-gradientstart to-gradientend">
          NOSSO PORTFÓLIO
        </button>
      </div>

      <div className="flex flex-col items-center justify-center px-[2rem] sm:px-0">
        <div className="flex  items-center">

          <p className=" text-[rem] text-center sm:text-start sm:text-[2rem]  text-white font-bold">
            POR QUE ESCOLHER A LUNE?
          </p>

        </div>

        <p className="text-[1rem] sm:text-[1.25rem] text-white px-[2rem] sm:px-0 text-center max-w-[35rem]">
          Contamos com uma equipe criativa e especializada, desenvolvendo
          projetos personalizados para cada cliente, sempre com foco em inovação
          e tecnologia.
        </p>

        <div className="grid  sm:grid-cols-1 lg:flex lg:justify-center xl:flex-wrap  2xl:grid-cols-3 gap-[3rem] py-[5rem]">
          {products.map((e, i) => {
            return (
              <Card
                key={i}
                className={"card h-[12.5rem] w-[12.5rem] xs:w-[15rem] xs:h-[15rem] sm:h-[25rem] sm:w-[25rem] items-center text-center"}
                icon={e.icon}
                title={e.title}
                text={e.text}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col  xl:flex-row items-center justify-around py-[5rem] px-[2rem] md:px-0 2xl:px-[8rem] ">
        <div className="bg-[#191818]  w-full md:w-[35rem]  h-fit sm:h-[35rem] flex flex-col items-center justify-center rounded-[15px] p-[2rem] sm:py-[5rem]  gap-y-[1.5rem]  sm:gap-y-[3rem] ">
          <input
            className="border-white border-[1px] text-[0.75rem] sm:text-[1rem]  w-full  h-[3rem] sm:h-[5rem] text-[#fff] font-bold outline-none px-[0.5rem] sm:px-[2rem] rounded-[5px]"
            placeholder="Nome"
            type="text"
          />
          <input
            className="border-white border-[1px] text-[0.75rem] sm:text-[1rem]  w-full  h-[3rem] sm:h-[5rem] text-[#fff] font-bold outline-none px-[0.5rem] sm:px-[2rem] rounded-[5px]"
            placeholder="Email"
            type="text"
          />
          <input
            className="border-white border-[1px] text-[0.75rem] sm:text-[1rem]  w-full  h-[3rem] sm:h-[5rem] text-[#fff] font-bold outline-none px-[0.5rem] sm:px-[2rem] rounded-[5px]"
            placeholder="WhatsApp"
            type="text"
          />
          <button className="cursor-pointer hover:scale-[1.2] duration-200  h-[4rem] px-[1.50rem] rounded-full font-bold text-[0.75rem] sm:text-[1rem] tracking-wide sm:tracking-widest bg-linear-to-r from-gradientstart to-gradientend text-white">
            ENTRE EM CONTATO
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-[2rem] py-[5rem]">
          <img src={Moon450} alt="LuneTech Moon" />

          <p className="text-white font-bold text-center sm:text-start text-[3rem]">NOSSAS REDES</p>

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
