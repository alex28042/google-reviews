import React from "react";
import {
  FcAssistant,
  FcConferenceCall,
  FcRatings,
  FcOk,
  FcLock,
  FcApproval,
  FcCustomerSupport,
} from "react-icons/fc";

function Characteristics() {
  const characteristics = [
    {
      name: "High-quality service",
      icon: <FcAssistant size={50} />, // Servicio de alta calidad
    },
    {
      name: "Real reviews, satisfied customers",
      icon: <FcConferenceCall size={50} />, // Servicio de alta calidad
    },
    {
      name: "Targeted services",
      icon: <FcRatings size={50} />, // Servicio de alta calidad
    },
    {
      name: "Privacy and security",
      icon: <FcLock size={50} />, // Servicio de alta calidad
    },
    {
      name: "30-day money-back guarantee",
      icon: <FcOk size={50} />, // Servicio de alta calidad
    },
    {
      name: "Customer satisfaction",
      icon: <FcCustomerSupport size={50} />, // Servicio de alta calidad
    },
  ];

  return (
    <div id="A" className="flex flex-col mt-44 mb-44">
      <h1 className="text-center font-bold md:text-3xl text-2xl">
        Impressive advantages included with our services:
      </h1>
      <div className="grid grid-cols-2  gap-2 md:flex mt-10 md:flex-row sm:ml-32 md:ml-0 ml-16  items-center justify-between">
        {characteristics.map((item, i) => (
          <>
            <div className="flex border border-purple-400 flex-col h-[200px] w-[170px] text-gray-500 rounded-xl shadow-lg bg-white items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              {item.icon}
              <p className="text-center font-semibold m-2">{item.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Characteristics;
