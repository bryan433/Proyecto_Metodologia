import React from "react";
import { useNavigate } from "react-router-dom";

const SeleccionDificultad = () => {
  const navigate = useNavigate();

  const handleDificultad = (nivel) => {
    navigate(`/juego?dificultad=${nivel}`);
  };

  return (
    <div className="bg-blue-900 w-screen text-white min-h-screen flex flex-col items-center justify-center px-4">
      <img
        src="https://i0.wp.com/www.cristic.com/wp-content/uploads/2022/07/cristic-juegos-educativos-online-castellano-primaria-pasapalabra.png?fit=1920%2C1080&ssl=1" 
        alt="Logo Pasapalabra"
        className="w-44 h-44 rounded-full mb-6 object-cover"
      />
      <h1 className="text-4xl font-bold mb-6 text-center">¡Bienvenido a Pasapalabra!</h1>
      <p className="text-lg text-center max-w-md mb-10">
        Pasapalabra es un emocionante juego de preguntas y respuestas donde
        deberás completar el rosco respondiendo correctamente a cada letra del
        abecedario. ¡Pon a prueba tus conocimientos y diviértete!
      </p>
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <button
          onClick={() => handleDificultad("baja")}
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg w-full"
        >
          Dificultad Baja
        </button>
        <button
          onClick={() => handleDificultad("media")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg w-full"
        >
          Dificultad Media
        </button>
        <button
          onClick={() => handleDificultad("completa")}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg w-full"
        >
          Dificultad Completa
        </button>
      </div>
    </div>
  );
};

export default SeleccionDificultad;