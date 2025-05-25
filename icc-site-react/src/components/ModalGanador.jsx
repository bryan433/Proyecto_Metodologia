import React from "react";

const ModalGanador = ({ mostrar, ganador, onClose }) => {
  if (!mostrar) return null;

  console.log("ModalGanador", mostrar, ganador);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{ganador ? "¡Ganaste!" : "¡Perdiste!"}</h2>
        <p className="text-gray-600 mb-6">¡Felicidades por completar el juego!</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ModalGanador;