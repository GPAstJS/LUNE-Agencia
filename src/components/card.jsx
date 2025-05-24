import React from "react";

export const Card = ({ className, icon, title, text }) => {
  return (
    <div
      className={`flex flex-col  justify-center px-[2rem] bg-maincard text-white hover:shadow-card duration-200 shadow-xl rounded-[15px] hover:scale-[1.05] gap-y-[2rem] ${className}`}
    >
      {icon}

      <p className="font-bold text-[2rem]">{title}</p>

      <p className="text-[1.5rem]">{text}</p>
    </div>
  );
};
