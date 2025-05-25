import React from "react";
import BotonIrAJuego from "./BotonIrAJuego";

function CardGame() {
  const games = [
    {
      id: 1,
      image: "https://galaaccionsocial.com/wp-content/uploads/2019/03/pasapalabra.jpeg", // Reemplaza con la URL de tu imagen
      title: "PasaPalabra",
      description: "es un juego de preguntas y respuestas basado en el abecedario.",
    },
    {
        id: 2,
        image: "https://galaaccionsocial.com/wp-content/uploads/2019/03/pasapalabra.jpeg", // Reemplaza con la URL de tu imagen
        title: "PasaPalabra",
        description: "es un juego de preguntas y respuestas basado en el abecedario.",
    },
    {
        id: 3,
        image: "https://galaaccionsocial.com/wp-content/uploads/2019/03/pasapalabra.jpeg", // Reemplaza con la URL de tu imagen
        title: "PasaPalabra",
        description: "es un juego de preguntas y respuestas basado en el abecedario.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Juegos Disponibles
      </h2>
      {/* Contenedor centrado con ancho limitado */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 max-w-xs mx-auto"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {game.title}
              </h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <BotonIrAJuego />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGame;