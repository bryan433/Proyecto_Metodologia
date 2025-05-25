import React from "react";

const Temporizador = () => {
  const timeLeft = "05:00"; // Tiempo fijo para mostrar

  return (
    <div className="bg-gray-700 text-white p-3 mb-10 rounded-lg text-center w-30 mx-auto">
      <h1 className="text-3xl font-bold">{timeLeft}</h1>
    </div>
  );
};

export default Temporizador;