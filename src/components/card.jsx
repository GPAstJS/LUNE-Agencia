import React from "react";

export const Card = ({ className, icon, title, text }) => {
  return (
    <div
      className={`flex flex-col  justify-center px-[2rem] bg-maincard text-white hover:shadow-card duration-200 shadow-xl rounded-[15px] hover:scale-[1.05] gap-y-[1rem] sm:gap-y-[2rem] ${className}`}
    >
      {icon}

      <div className="flex flex-col gap-y-[1rem] sm:gap-y-[2rem] text-center md:text-start">
      <p className="font-bold text-[1rem] xs:text-[1.25rem] sm:text-[2rem]">{title}</p>

      <p className=" text-[0.75rem] xs:text-[1rem] sm:text-[1.25rem]">{text}</p>
      </div>
    </div>
  );
};
