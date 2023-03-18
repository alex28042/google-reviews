import React from "react";

function Characteristics() {
  const characteristics = [
    {
      name: "Servicio de alta calidad",
    },
    {
      name: "Reseñas reales, clientes satisfechos",
    },
    {
      name: "Servicios dirigidos",
    },
    {
      name: "Privacidad y seguridad",
    },
    {
      name: "30 días de garantía de devolución de dinero",
    },
    {
      name: "La satisfacción del cliente",
    },
  ];

  return (
    <div className="flex flex-col mt-44 mb-44">
      <h1 className="text-center font-bold text-3xl">
        Impressive advantages included with our services:
      </h1>
      <div className="flex mt-10 flex-row  items-center justify-between">
        {characteristics.map((item, i) => (
          <>
            <div className="flex border border-purple-400 flex-col h-[200px] w-[170px] text-gray-500 rounded-xl shadow-lg bg-white items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <p className="text-center font-semibold m-2">{item.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Characteristics;
