import BotonIrAJuego from "./BotonIrAJuego";
import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    image:
      "https://galaaccionsocial.com/wp-content/uploads/2019/03/pasapalabra.jpeg",
    title: "PasaPalabra",
    description:
      "es un juego de preguntas y respuestas basado en el abecedario.",
  },
  {
    id: 2,
    image:
      "/byran2.jpg",
    title: "Reconocimiento Facial",
    description:
      "es un juego de reconocimiento facial basado en la inteligencia artificial.",
  },
];

export function CardGameContainer() {
  return (
    <div id="" className=" py-10 px-4   ">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-8">
        Juegos Disponibles
      </h2>
      <CardListGames />
    </div>
  );
}

export const CardListGames = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-10 grow-1">
      {games.map((game) => (
        <CardGameUnified game={game} key={game.id} />
      ))}
    </div>
  );
};

export const CardGameUnified = ({ game }) => {
  return (
    <div className="bg-[#201d25] rounded-xl shadow-md shadow-gray-100/5  overflow-hidden transform hover:scale-105 transition duration-300  mx-auto flex w-full max-w-xl">
      {/* Imagen del juego */}
      <div
        className="w-full aspect-video bg-center bg-contain bg-no-repeat rounded-md flex-1 "
        style={{ backgroundImage: `url(${game.image})` }}
      />


      {/* Contenido */}
      <div className="p-4 flex flex-col gap-3 flex-2">
        <h3 className="text-white text-xl font-bold tracking-tight">
          {game.title}
        </h3>
        <p className="text-[#a7a1b5] text-base leading-normal">
          {game.description}
        </p>
        <Link
          to="/dificultad"
          className="self-start rounded-full bg-[#bfadea] text-[#131217] text-sm font-semibold px-5 py-2 hover:bg-[#d2c4f5] transition"
        >
          {game.buttonLabel || "Play Now"}
        </Link>
      </div>
    </div>
  );
};


export const CardGame = ({ game }) => {
  return (
    <div
      key={game.id}
      className="bg-white rounded-lg shadow-gray-100 shadow-lg w-full overflow-hidden transform hover:scale-105 transition duration-300 max-w-xs mx-auto"
    >
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
        <p className="text-gray-600 mb-4">{game.description}</p>
        <BotonIrAJuego />
      </div>
    </div>
  );
};

export const CardGameSt = ({ game }) => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Coming Soon
      </h2>
      <div className="p-4 @container bg-red-800">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-[#201d25]">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"></div>
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4 px-4">
            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              {game.title}
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-[#a7a1b5] text-base font-normal leading-normal">
                {game.description}
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#bfadea] text-[#131217] text-sm font-medium leading-normal">
                <span className="truncate">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};